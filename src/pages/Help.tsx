import { MessageCircle, Mail, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const Help = () => {
  const faqs = [
    {
      question: "How do I track my order?",
      answer:
        "You can track your order by going to 'My Orders' in your profile or using the tracking link sent to your email after shipment.",
    },
    {
      question: "What is your return policy?",
      answer:
        "We offer easy returns within 7 days of delivery. The product must be unused with all tags intact. Visit our Return Policy page for details.",
    },
    {
      question: "How long does delivery take?",
      answer:
        "Delivery typically takes 3-7 business days depending on your location. You'll receive an estimated delivery date at checkout.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept Credit/Debit Cards, UPI, Net Banking, and Cash on Delivery (COD) for eligible orders.",
    },
    {
      question: "How do I cancel my order?",
      answer:
        "You can cancel your order from 'My Orders' section before it's shipped. Once shipped, you can return it after delivery.",
    },
    {
      question: "Are there any hidden charges?",
      answer:
        "No, the price you see at checkout is the final price. Delivery is free on orders above ₹999.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Help Center</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* FAQ Section */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Frequently Asked Questions</CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger>{faq.question}</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>

            {/* Contact Form */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Still Need Help?</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="How can we help you?"
                      rows={4}
                    />
                  </div>
                  <Button className="w-full">Send Message</Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Options */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Contact Us</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-sm text-muted-foreground">
                      1800-XXX-XXXX
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Mon-Sat, 9 AM - 6 PM
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-sm text-muted-foreground">
                      support@stylehub.com
                    </p>
                    <p className="text-sm text-muted-foreground">
                      We'll respond within 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MessageCircle className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-semibold">Live Chat</p>
                    <Button variant="outline" size="sm" className="mt-2">
                      Start Chat
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quick Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="ghost" className="w-full justify-start">
                  Order Tracking
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  Return Policy
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  Shipping Info
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  Size Guide
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Help;
