
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/hooks/useCart';
import { CreditCard, ArrowLeft, CheckCircle } from 'lucide-react';

const Payment = () => {
  const { items, total, clearCart } = useCart();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    aadhar: '',
    address: '',
    city: '',
    state: '',
    pincode: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handlePayment = () => {
    // Validate form
    if (!formData.fullName || !formData.email || !formData.phone || !formData.aadhar) {
      alert('Please fill in all required fields');
      return;
    }
    
    alert('Payment functionality requires Supabase integration. Please connect to Supabase first.');
  };

  const subtotal = total;
  const gstAmount = Math.round(total * 0.18); // 18% GST
  const totalWithGst = subtotal + gstAmount;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-6">
          <Button 
            variant="outline" 
            onClick={() => window.history.back()}
            className="mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h1 className="text-2xl font-bold text-blue-600 mb-2">IndiaFilings Private Limited</h1>
                <p className="text-gray-600">Chennai, Chennai - 600001</p>
                <p className="text-gray-600">CIN: U67190TN2014PTC098976</p>
                <p className="text-gray-600">GSTIN: 33AADCI6142F1ZX</p>
              </div>
              <div className="text-right">
                <div className="bg-blue-100 px-3 py-1 rounded text-blue-600 font-medium mb-2">Quote</div>
                <p className="text-sm text-gray-600">Estimate Date:</p>
                <p className="font-medium">{new Date().toLocaleDateString()}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Bill To Section */}
              <div>
                <h3 className="font-semibold mb-4">Bill To</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Aadhar Number *
                    </label>
                    <input
                      type="text"
                      name="aadhar"
                      value={formData.aadhar}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter your Aadhar number"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Address
                    </label>
                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter your address"
                      rows={3}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        City
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="City"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        State
                      </label>
                      <input
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="State"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Order Summary */}
              <div>
                <h3 className="font-semibold mb-4">Order Summary</h3>
                {items.length === 0 ? (
                  <p className="text-gray-500">No items in cart</p>
                ) : (
                  <div className="space-y-4">
                    {/* Services Table */}
                    <div className="border rounded-lg overflow-hidden">
                      <table className="w-full">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Description</th>
                            <th className="px-4 py-3 text-center text-sm font-medium text-gray-700">Qty</th>
                            <th className="px-4 py-3 text-right text-sm font-medium text-gray-700">Rate</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          {items.map((item) => (
                            <tr key={item.id}>
                              <td className="px-4 py-4">
                                <div>
                                  <h4 className="font-medium text-gray-900">{item.name}</h4>
                                  <p className="text-sm text-gray-600">{item.description}</p>
                                  <div className="mt-2 space-y-1">
                                    <div className="flex items-center text-sm text-green-600">
                                      <CheckCircle className="w-4 h-4 mr-1" />
                                      Professional guidance
                                    </div>
                                    <div className="flex items-center text-sm text-green-600">
                                      <CheckCircle className="w-4 h-4 mr-1" />
                                      100% Compliance
                                    </div>
                                    <div className="flex items-center text-sm text-green-600">
                                      <CheckCircle className="w-4 h-4 mr-1" />
                                      Expert Support
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td className="px-4 py-4 text-center">{item.quantity}</td>
                              <td className="px-4 py-4 text-right font-medium">INR {item.price * item.quantity}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    {/* Billing Summary */}
                    <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                      <div className="flex justify-between">
                        <span>Subtotal</span>
                        <span>INR {subtotal}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>GST (18%)</span>
                        <span>INR {gstAmount}</span>
                      </div>
                      <div className="flex justify-between font-bold text-lg border-t pt-2">
                        <span>Total Due</span>
                        <span>INR {totalWithGst}</span>
                      </div>
                    </div>

                    <Button 
                      className="w-full gradient-bg text-white text-lg py-3"
                      onClick={handlePayment}
                      disabled={items.length === 0}
                    >
                      <CreditCard className="w-5 h-5 mr-2" />
                      PAY INR {totalWithGst} ONLINE
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
