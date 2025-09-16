import { Star, TrendingUp, Users, Eye } from "lucide-react";

const FeaturedStreamers = () => {
  const streamers = [
    {
      id: 1,
      name: "PixelNinja",
      image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&h=400&fit=crop&crop=face",
      bio: "Master of indie games and speedruns",
      bioSecond: "Known for incredible reaction times",
      rating: 87,
      followers: "45.2K",
      avgViewers: "2.1K",
      growth: "+340%"
    },
    {
      id: 2,
      name: "CosmicGamer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      bio: "Space games and simulation expert",
      bioSecond: "Building the ultimate gaming setup",
      rating: 92,
      followers: "67.8K",
      avgViewers: "3.4K",
      growth: "+280%"
    },
    {
      id: 3,
      name: "NeonQueen",
      image: "https://images.unsplash.com/photo-1494790108755-2616c6d12e04?w=400&h=400&fit=crop&crop=face",
      bio: "Competitive FPS with killer style",
      bioSecond: "Rising esports phenomenon",
      rating: 95,
      followers: "89.1K",
      avgViewers: "4.7K",
      growth: "+425%"
    }
  ];

  const renderStars = (rating: number) => {
    const stars = Math.floor(rating / 20);
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < stars ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground'
        }`}
      />
    ));
  };

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black gradient-text mb-4">
            This Week's Rising Streamers
          </h2>
          <p className="text-xl text-muted-foreground">
            Data-driven discoveries from Twitch's fastest-growing creators
          </p>
        </div>

        {/* Streamers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {streamers.map((streamer) => (
            <div
              key={streamer.id}
              className="group relative bg-gradient-card rounded-2xl p-8 card-glow hover:shadow-intense transition-all duration-500 gradient-border"
            >
              {/* Profile Image */}
              <div className="relative mb-6 flex justify-center">
                <div className="relative">
                  <img
                    src={streamer.image}
                    alt={streamer.name}
                    className="w-24 h-24 rounded-full object-cover ring-4 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-gradient-primary rounded-full p-2">
                    <TrendingUp className="w-4 h-4 text-black" />
                  </div>
                </div>
              </div>

              {/* Name */}
              <h3 className="text-2xl font-bold text-center mb-2 group-hover:gradient-text transition-all duration-300">
                {streamer.name}
              </h3>

              {/* Bio */}
              <div className="text-center mb-6 space-y-1">
                <p className="text-muted-foreground">{streamer.bio}</p>
                <p className="text-muted-foreground text-sm">{streamer.bioSecond}</p>
              </div>

              {/* Rating */}
              <div className="flex items-center justify-center mb-6 space-x-2">
                <div className="flex space-x-1">
                  {renderStars(streamer.rating)}
                </div>
                <span className="text-lg font-semibold gradient-text">
                  {streamer.rating}/100
                </span>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="space-y-1">
                  <div className="flex items-center justify-center">
                    <Users className="w-4 h-4 text-primary mr-1" />
                  </div>
                  <p className="text-lg font-semibold">{streamer.followers}</p>
                  <p className="text-xs text-muted-foreground">Followers</p>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-center">
                    <Eye className="w-4 h-4 text-accent mr-1" />
                  </div>
                  <p className="text-lg font-semibold">{streamer.avgViewers}</p>
                  <p className="text-xs text-muted-foreground">Avg Viewers</p>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-green-400 mr-1" />
                  </div>
                  <p className="text-lg font-semibold text-green-400">{streamer.growth}</p>
                  <p className="text-xs text-muted-foreground">Growth</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedStreamers;