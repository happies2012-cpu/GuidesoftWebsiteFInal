import React from 'react';
import { SplashCursor } from '@/components/ui/splash-cursor';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const SplashCursorDemo = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/5">
      {/* Splash Cursor Effect */}
      <SplashCursor />
      
      <div className="container mx-auto px-4 py-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <Link to="/">
            <Button variant="outline" className="mb-8">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          
          <Card className="border-primary/20 shadow-xl backdrop-blur-lg bg-background/90">
            <CardHeader>
              <CardTitle className="text-3xl font-bold">Splash Cursor Demo</CardTitle>
              <CardDescription>
                Interactive fluid simulation that responds to mouse and touch movements
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="text-center py-12">
                  <h2 className="text-2xl font-bold mb-4">Try Moving Your Cursor!</h2>
                  <p className="text-muted-foreground mb-6">
                    Move your cursor around the screen to create beautiful fluid effects.
                    Click or tap to create splashes of color.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
                    <Card className="border-primary/10 bg-primary/5">
                      <CardContent className="p-4 text-center">
                        <div className="text-3xl font-bold text-primary">1</div>
                        <div className="text-sm text-muted-foreground">Move Cursor</div>
                      </CardContent>
                    </Card>
                    <Card className="border-primary/10 bg-primary/5">
                      <CardContent className="p-4 text-center">
                        <div className="text-3xl font-bold text-primary">2</div>
                        <div className="text-sm text-muted-foreground">Click/Tap</div>
                      </CardContent>
                    </Card>
                    <Card className="border-primary/10 bg-primary/5">
                      <CardContent className="p-4 text-center">
                        <div className="text-3xl font-bold text-primary">3</div>
                        <div className="text-sm text-muted-foreground">Enjoy Effects</div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
                
                <div className="bg-muted/50 border rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3">How It Works</h3>
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                    <li>Uses WebGL for high-performance fluid simulation</li>
                    <li>Responds to mouse movements and touch gestures</li>
                    <li>Creates colorful fluid effects with each interaction</li>
                    <li>Optimized for smooth performance on modern browsers</li>
                  </ul>
                </div>
                
                <div className="text-center">
                  <Button size="lg" className="text-lg px-8">
                    Get Started with AI Tools
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default SplashCursorDemo;