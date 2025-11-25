import React from "react";
import { ChefHat, Heart, Users, Award } from "lucide-react";

const AboutUs: React.FC = () => {
  const stats = [
    { label: "Recipes Shared", value: "500+" },
    { label: "Happy Readers", value: "50K+" },
    { label: "Countries Reached", value: "30+" },
    { label: "Years of Passion", value: "5+" },
  ];

  const values = [
    {
      icon: Heart,
      title: "Passion for Food",
      description:
        "Every recipe is crafted with love and tested multiple times to ensure perfection.",
    },
    {
      icon: Users,
      title: "Community First",
      description:
        "We believe in building a warm community of food lovers who share and inspire.",
    },
    {
      icon: ChefHat,
      title: "Authentic Recipes",
      description:
        "From traditional family recipes to modern twists, authenticity is our priority.",
    },
    {
      icon: Award,
      title: "Quality Content",
      description:
        "Detailed instructions, beautiful photos, and honest reviews you can trust.",
    },
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "Founder & Head Chef",
      bio: "Culinary school graduate with 15 years of experience in Mediterranean cuisine.",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    },
    {
      name: "Marco Romano",
      role: "Recipe Developer",
      bio: "Italian native specializing in pasta, pizza, and traditional Italian desserts.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    },
    {
      name: "Emily Chen",
      role: "Food Photographer",
      bio: "Award-winning photographer capturing the beauty and essence of every dish.",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    },
  ];

  return (
    <div
      id="about"
      className="min-h-screen bg-linear-to-b from-orange-50 to-white"
    >
      {/* Hero Section */}
      <div className="relative bg-linear-to-r from-orange-600 to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Welcome to Our Kitchen
            </h1>
            <p className="text-xl text-orange-100 max-w-3xl mx-auto">
              Where every recipe tells a story and every meal brings people
              together
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="white"
            />
          </svg>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-3xl font-bold text-orange-600 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Our Story Section */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-700 text-base leading-relaxed">
              <p>
                What started as a simple food diary in 2019 has blossomed into a
                thriving community of passionate home cooks and food enthusiasts
                from around the world.
              </p>
              <p>
                Our journey began in a small apartment kitchen, where recipes
                were tested, retested, and perfected. We believe that cooking is
                more than just following instructions—it's about creating
                memories, sharing love, and bringing people together around the
                dinner table.
              </p>
              <p>
                Today, we're proud to share hundreds of tried-and-true recipes,
                from quick weeknight dinners to elaborate celebration feasts.
                Each recipe comes with detailed instructions, helpful tips, and
                honest feedback from our community.
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&h=600&fit=crop"
              alt="Kitchen cooking"
              className="rounded-2xl shadow-2xl w-full"
            />
            <div className="absolute -bottom-6 -left-6 bg-orange-600 text-white p-6 rounded-xl shadow-xl max-w-xs hidden">
              <p className="font-semibold text-lg">
                "Cooking with love provides food for the soul"
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-gray-50 py-12 ">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-12 ">
            <h2 className="text-3xl 4xl font-bold text-gray-900 mb-4">
              What We Stand For
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our core values guide everything we do, from recipe development to
              community engagement
            </p>
          </div>
          <div className="grid lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  <div className="bg-orange-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-orange-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Meet Our Team
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The passionate people behind your favorite recipes
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6 overflow-hidden rounded-2xl">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full aspect-square object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {member.name}
              </h3>
              <p className="text-orange-600 font-semibold mb-3 text-sm">
                {member.role}
              </p>
              <p className="text-gray-600 text-sm">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-linear-to-r from-orange-600 to-red-600 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16 text-center">
          <h2 className="text-4xl font-bold mb-6">Join Our Community</h2>
          <p className="text-xl text-orange-100 mb-8">
            Subscribe to our newsletter for weekly recipes, cooking tips, and
            exclusive content
          </p>
          <div className="flex flex-col gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-full text-gray-900 focus:outline-none focus:ring-4 focus:ring-orange-300"
            />
            <button className="px-8 py-4 bg-white text-orange-600 rounded-full font-semibold hover:bg-orange-50 transition-colors shadow-lg">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
