import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Location from "@/components/Location";

const FindUs = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20 pb-16">
        <Location />
      </main>
      <Footer />
    </div>
  );
};

export default FindUs;
