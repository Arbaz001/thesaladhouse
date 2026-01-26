import { MapPin, Clock, Phone } from "lucide-react";

const Location = () => {
  return (
    <section id="location" className="py-20 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Find Us
          </h2>
          <p className="text-lg text-muted-foreground">
            You are most welcome to visit us anytime and see our processes firsthand.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Map Embed - Element One Mall, Sector 49, Gurgaon */}
          <div className="rounded-xl overflow-hidden shadow-lg h-[400px] bg-muted">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.5!2d77.0384!3d28.4089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d229e88fd54c5%3A0x86d0e45b6c39fc45!2sElement%20One%20Mall!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="The Salad House Location"
            />
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-background rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Address</h4>
                    <p className="text-muted-foreground mb-2">
                      The Salad House<br />
                      Shop No. 30, First Floor (Above Starbucks), Block B,<br />
                      Element One Mall, Sector 49, Gurgaon
                    </p>
                    <a 
                      href="https://maps.app.goo.gl/zcTqdhNBCDMFdQec6" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 transition-colors text-sm font-medium inline-flex items-center gap-1"
                    >
                      📍 Location on Google Maps
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Hours</h4>
                    <p className="text-muted-foreground">
                      Monday - Saturday<br />
                      8:00 AM - 10:00 PM
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Contact</h4>
                    <p className="text-muted-foreground">
                      <a href="tel:+919910074734" className="hover:text-primary transition-colors">+91 9910074734</a>
                      {" | "}
                      <a href="mailto:divya@thesaladhouse.co" className="hover:text-primary transition-colors">divya@thesaladhouse.co</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
