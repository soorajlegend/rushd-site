const Features = () => {
  const features = [
    {
      icon: "📊",
      title: "All-in-One Management",
      description: "Centralized dashboard for tracking all properties"
    },
    {
      icon: "📈",
      title: "Financial & Occupancy Analytics",
      description: "Real-time revenue and occupancy insights"
    },
    {
      icon: "🤖",
      title: "Automation",
      description: "AI-powered operational automation"
    },
    {
      icon: "🔄",
      title: "Multi-Channel Booking Sync",
      description: "Connect with platforms like Airbnb, Booking.com, and Vrbo"
    },
    {
      icon: "🌐",
      title: "Direct Booking Website",
      description: "Custom website for real estate owners to allow clients to book & pay directly, cutting OTA commissions"
    },
    {
      icon: "🔗",
      title: "OTA Integration",
      description: "Seamlessly sync calendars, rates, and availability across Airbnb, Vrbo, Booking.com, and more"
    }
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-black mb-4">
            What are the advantages of our platform?
          </h2>
          <p className="text-gray-600 mb-12">
            Let us help you manage your properties more efficiently!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-primary mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;