import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ReturnPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Return & Exchange Policy</h1>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Easy Returns within 7 Days</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>We want you to be completely satisfied with your purchase. If you're not happy with your order, you can return it within 7 days of delivery.</p>
              
              <div>
                <h3 className="font-semibold mb-2">Conditions for Returns:</h3>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>Product must be unused and in original condition</li>
                  <li>All tags and labels must be intact</li>
                  <li>Original packaging should be retained</li>
                  <li>Invoice must be provided</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Non-Returnable Items:</h3>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>Innerwear and lingerie</li>
                  <li>Socks and swimwear</li>
                  <li>Jewelry and accessories (for hygiene reasons)</li>
                  <li>Items marked as non-returnable</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>How to Return</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
                <li>Go to My Orders section in your profile</li>
                <li>Select the item you want to return</li>
                <li>Choose return reason from dropdown</li>
                <li>Schedule a pickup or drop at nearest hub</li>
                <li>Refund will be initiated after quality check</li>
              </ol>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Refund Process</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-muted-foreground">Once we receive your returned item and verify its condition, we will process your refund within 5-7 business days.</p>
              <p className="text-muted-foreground">Refunds will be credited to the original payment method or as store credit, based on your preference.</p>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ReturnPolicy;
