import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertCircle, CheckCircle, QrCode, Copy, ExternalLink } from 'lucide-react';
import { toast } from 'sonner';

interface PaymentComponentProps {
  toolName: string;
  amount: number;
  isOpen: boolean;
  onClose: () => void;
  onPaymentSuccess: (transactionId?: string) => void;
}

const PaymentComponent: React.FC<PaymentComponentProps> = ({ 
  toolName, 
  amount, 
  isOpen, 
  onClose, 
  onPaymentSuccess 
}) => {
  const [upiId] = useState('8884162999@ybl');
  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'qr'>('upi');
  const [isCopied, setIsCopied] = useState(false);
  const [paymentVerified, setPaymentVerified] = useState(false);
  const [verificationCode, setVerificationCode] = useState('');

  // Generate UPI payment link
  const upiLink = `upi://pay?pa=${upiId}&pn=Guidesoft&am=${amount}&cu=INR&tn=Enrollment for ${encodeURIComponent(toolName)}`;

  const handleCopyUPI = async () => {
    try {
      await navigator.clipboard.writeText(upiId);
      setIsCopied(true);
      toast.success('UPI ID copied to clipboard!');
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      toast.error('Failed to copy UPI ID');
    }
  };

  const handleVerifyPayment = () => {
    // In a real implementation, this would connect to a payment verification API
    // For demo purposes, we'll just simulate a successful verification
    if (verificationCode.trim() !== '') {
      setPaymentVerified(true);
      toast.success('Payment verified successfully!');
      // Pass the verification code as transaction ID
      setTimeout(() => {
        onPaymentSuccess(verificationCode);
        onClose();
      }, 1500);
    } else {
      toast.error('Please enter a verification code');
    }
  };

  const resetPayment = () => {
    setPaymentMethod('upi');
    setIsCopied(false);
    setPaymentVerified(false);
    setVerificationCode('');
  };

  const handleClose = () => {
    resetPayment();
    onClose();
  };

  // Generate QR code using a third-party service
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(upiLink)}`;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && handleClose()}>
      <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Complete Your Payment</DialogTitle>
        </DialogHeader>
        
        {!paymentVerified ? (
          <div className="space-y-6">
            <Alert>
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                Complete your payment of ₹{amount} to enroll in {toolName}
              </AlertDescription>
            </Alert>
            
            <div className="bg-muted p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Payment Details</h3>
              <p className="text-sm">Course: {toolName}</p>
              <p className="text-lg font-bold">Amount: ₹{amount}/-</p>
            </div>
            
            <div className="space-y-4">
              <div className="flex space-x-2">
                <Button
                  variant={paymentMethod === 'upi' ? 'default' : 'outline'}
                  onClick={() => setPaymentMethod('upi')}
                  className="flex-1"
                >
                  UPI Payment
                </Button>
                <Button
                  variant={paymentMethod === 'qr' ? 'default' : 'outline'}
                  onClick={() => setPaymentMethod('qr')}
                  className="flex-1"
                >
                  QR Code
                </Button>
              </div>
              
              {paymentMethod === 'upi' ? (
                <div className="space-y-4">
                  <div className="bg-background border rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium">Pay via UPI</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Use any UPI app (PhonePe, Google Pay, Paytm, etc.)
                        </p>
                      </div>
                      <QrCode className="h-8 w-8 text-primary" />
                    </div>
                    
                    <div className="mt-4 space-y-2">
                      <div className="flex items-center justify-between p-2 bg-muted rounded">
                        <span className="text-sm font-mono">{upiId}</span>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={handleCopyUPI}
                          className="ml-2"
                        >
                          {isCopied ? 'Copied!' : <Copy className="h-4 w-4" />}
                        </Button>
                      </div>
                      
                      <a
                        href={upiLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full"
                      >
                        <Button className="w-full">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Open UPI App
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="bg-background border rounded-lg p-4 text-center">
                    <h4 className="font-medium mb-2">Scan QR Code</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Scan this QR code with any UPI app to make payment
                    </p>
                    <div className="flex justify-center">
                      <img 
                        src={qrCodeUrl} 
                        alt="UPI Payment QR Code" 
                        className="w-48 h-48"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="verificationCode">Verification Code</Label>
              <Input
                id="verificationCode"
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
                placeholder="Enter transaction ID or verification code"
              />
              <p className="text-xs text-muted-foreground">
                After completing payment, enter the transaction ID or verification code
              </p>
            </div>
            
            <Button onClick={handleVerifyPayment} className="w-full">
              <CheckCircle className="h-4 w-4 mr-2" />
              Verify Payment
            </Button>
          </div>
        ) : (
          <div className="text-center py-8">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Payment Successful!</h3>
            <p className="text-muted-foreground mb-4">
              You now have access to {toolName}
            </p>
            <Button onClick={onClose} className="w-full">
              Continue to Tool
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default PaymentComponent;