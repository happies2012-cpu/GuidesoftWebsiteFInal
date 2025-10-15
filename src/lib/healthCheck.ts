/**
 * Network Health Check Utility
 * Tests backend connectivity and provides diagnostics
 */

export interface HealthCheckResult {
  backend: boolean;
  database: boolean;
  timestamp: string;
  latency?: number;
  error?: string;
}

export async function checkBackendHealth(): Promise<HealthCheckResult> {
  const startTime = Date.now();
  
  try {
    const response = await fetch('/api/health', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
      signal: AbortSignal.timeout(5000), // 5 second timeout
    });

    const latency = Date.now() - startTime;

    if (!response.ok) {
      throw new Error(`Backend returned ${response.status}`);
    }

    const data = await response.json();

    return {
      backend: true,
      database: data.status === 'ok',
      timestamp: new Date().toISOString(),
      latency,
    };
  } catch (error) {
    console.error('Backend health check failed:', error);
    
    return {
      backend: false,
      database: false,
      timestamp: new Date().toISOString(),
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

export async function testAPIConnection() {
  console.log('🔍 Testing API Connection...');
  
  const result = await checkBackendHealth();
  
  if (result.backend) {
    console.log('✅ Backend is healthy');
    console.log(`   Latency: ${result.latency}ms`);
  } else {
    console.error('❌ Backend is down');
    console.error(`   Error: ${result.error}`);
    console.error('   Please ensure backend server is running on port 3001');
  }
  
  return result;
}

// Auto-check on app start (only in development)
if (import.meta.env.DEV) {
  testAPIConnection();
}
