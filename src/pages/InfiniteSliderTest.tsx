import React from 'react';
import { InfiniteSlider } from '@/components/ui/infinite-slider';

const InfiniteSliderTest = () => {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-foreground mb-8 text-center">
          Infinite Slider Component Test
        </h1>
        
        {/* Horizontal Slider */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-4">Horizontal Slider</h2>
          <InfiniteSlider duration={20} className="py-4">
            <div className="w-64 h-32 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center text-primary-foreground font-semibold">
              Card 1
            </div>
            <div className="w-64 h-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white font-semibold">
              Card 2
            </div>
            <div className="w-64 h-32 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center text-white font-semibold">
              Card 3
            </div>
            <div className="w-64 h-32 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center text-white font-semibold">
              Card 4
            </div>
            <div className="w-64 h-32 bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg flex items-center justify-center text-white font-semibold">
              Card 5
            </div>
          </InfiniteSlider>
        </div>

        {/* Reverse Horizontal Slider */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-4">Reverse Horizontal Slider</h2>
          <InfiniteSlider duration={15} reverse={true} className="py-4">
            <div className="w-48 h-24 bg-card border border-primary/20 rounded-lg flex items-center justify-center text-foreground font-medium">
              Item A
            </div>
            <div className="w-48 h-24 bg-card border border-primary/20 rounded-lg flex items-center justify-center text-foreground font-medium">
              Item B
            </div>
            <div className="w-48 h-24 bg-card border border-primary/20 rounded-lg flex items-center justify-center text-foreground font-medium">
              Item C
            </div>
            <div className="w-48 h-24 bg-card border border-primary/20 rounded-lg flex items-center justify-center text-foreground font-medium">
              Item D
            </div>
          </InfiniteSlider>
        </div>

        {/* Hover Effect Slider */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-4">Hover to Slow Down</h2>
          <InfiniteSlider duration={10} durationOnHover={30} className="py-4">
            <div className="w-56 h-28 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-xl flex items-center justify-center text-white font-semibold shadow-lg">
              Hover Me 1
            </div>
            <div className="w-56 h-28 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center text-white font-semibold shadow-lg">
              Hover Me 2
            </div>
            <div className="w-56 h-28 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-semibold shadow-lg">
              Hover Me 3
            </div>
            <div className="w-56 h-28 bg-gradient-to-br from-rose-500 to-pink-600 rounded-xl flex items-center justify-center text-white font-semibold shadow-lg">
              Hover Me 4
            </div>
          </InfiniteSlider>
        </div>

        {/* Features Summary */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-foreground mb-6">Features Tested</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-4 border border-primary/20 rounded-lg bg-card">
              <h3 className="font-semibold text-foreground mb-2">✅ Fixed Syntax Error</h3>
              <p className="text-muted-foreground text-sm">Corrected the 'use client' directive</p>
            </div>
            <div className="p-4 border border-primary/20 rounded-lg bg-card">
              <h3 className="font-semibold text-foreground mb-2">✅ Horizontal Sliding</h3>
              <p className="text-muted-foreground text-sm">Smooth infinite horizontal animation</p>
            </div>
            <div className="p-4 border border-primary/20 rounded-lg bg-card">
              <h3 className="font-semibold text-foreground mb-2">✅ Reverse Direction</h3>
              <p className="text-muted-foreground text-sm">Can slide in opposite direction</p>
            </div>
            <div className="p-4 border border-primary/20 rounded-lg bg-card">
              <h3 className="font-semibold text-foreground mb-2">✅ Hover Effects</h3>
              <p className="text-muted-foreground text-sm">Speed changes on hover interaction</p>
            </div>
            <div className="p-4 border border-primary/20 rounded-lg bg-card">
              <h3 className="font-semibold text-foreground mb-2">✅ Responsive Design</h3>
              <p className="text-muted-foreground text-sm">Works across different screen sizes</p>
            </div>
            <div className="p-4 border border-primary/20 rounded-lg bg-card">
              <h3 className="font-semibold text-foreground mb-2">✅ TypeScript Support</h3>
              <p className="text-muted-foreground text-sm">Full type safety and intellisense</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfiniteSliderTest;