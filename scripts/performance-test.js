#!/usr/bin/env node

import { performance } from 'perf_hooks';
import https from 'https';
import http from 'http';

const testUrl = process.argv[2] || 'http://localhost:8080';
const isHttps = testUrl.startsWith('https');

const client = isHttps ? https : http;

console.log(`🚀 Testing performance for: ${testUrl}`);
console.log('='.repeat(50));

const testPerformance = (url) => {
  return new Promise((resolve, reject) => {
    const startTime = performance.now();
    
    const req = client.get(url, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        const endTime = performance.now();
        const loadTime = endTime - startTime;
        
        resolve({
          statusCode: res.statusCode,
          loadTime: Math.round(loadTime),
          contentLength: data.length,
          headers: res.headers
        });
      });
    });
    
    req.on('error', (err) => {
      reject(err);
    });
    
    req.setTimeout(10000, () => {
      req.destroy();
      reject(new Error('Request timeout'));
    });
  });
};

const runTests = async () => {
  try {
    console.log('📊 Running performance tests...\n');
    
    // Test 1: Initial page load
    console.log('1️⃣ Testing initial page load...');
    const result1 = await testPerformance(testUrl);
    console.log(`   ✅ Status: ${result1.statusCode}`);
    console.log(`   ⏱️  Load Time: ${result1.loadTime}ms`);
    console.log(`   📦 Content Size: ${Math.round(result1.contentLength / 1024)}KB`);
    console.log(`   🔒 HTTPS: ${isHttps ? 'Yes' : 'No'}`);
    
    // Test 2: Cached load
    console.log('\n2️⃣ Testing cached load...');
    const result2 = await testPerformance(testUrl);
    console.log(`   ✅ Status: ${result2.statusCode}`);
    console.log(`   ⏱️  Load Time: ${result2.loadTime}ms`);
    console.log(`   📈 Improvement: ${result1.loadTime - result2.loadTime}ms faster`);
    
    // Test 3: API endpoint
    console.log('\n3️⃣ Testing API endpoint...');
    const apiUrl = testUrl.replace(':8080', ':3001') + '/api/health';
    const result3 = await testPerformance(apiUrl);
    console.log(`   ✅ Status: ${result3.statusCode}`);
    console.log(`   ⏱️  Load Time: ${result3.loadTime}ms`);
    
    // Performance analysis
    console.log('\n📈 Performance Analysis:');
    console.log('='.repeat(30));
    
    if (result1.loadTime < 1000) {
      console.log('🟢 Excellent: Page loads in under 1 second');
    } else if (result1.loadTime < 2000) {
      console.log('🟡 Good: Page loads in under 2 seconds');
    } else {
      console.log('🔴 Needs improvement: Page takes over 2 seconds to load');
    }
    
    if (result1.contentLength < 500000) {
      console.log('🟢 Excellent: Small bundle size');
    } else if (result1.contentLength < 1000000) {
      console.log('🟡 Good: Reasonable bundle size');
    } else {
      console.log('🔴 Needs improvement: Large bundle size');
    }
    
    if (isHttps) {
      console.log('🟢 Excellent: HTTPS enabled');
    } else {
      console.log('🟡 Good: HTTP (consider enabling HTTPS for production)');
    }
    
    console.log('\n✨ Performance test completed!');
    
  } catch (error) {
    console.error('❌ Error running performance tests:', error.message);
  }
};

runTests();
