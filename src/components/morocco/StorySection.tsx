const StorySection = () => {
  return (
    <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
      <span className="text-xs md:text-sm font-semibold tracking-[3px] uppercase text-primary mb-4 block">
        THE JOURNEY
      </span>
      <h2 className="text-2xl md:text-4xl font-heading mb-6">
        Morocco Has Been Calling You for Years. It's Time to Answer.
      </h2>
      
      <div className="space-y-5 text-foreground/85 text-base md:text-lg leading-relaxed">
        <p>You've been telling yourself "someday" for years.</p>
        
        <p>
          Someday you'll walk through ancient medinas where the air smells like saffron and cedar. Someday you'll sleep under Sahara stars so bright you can read by them. Someday you'll understand why Morocco makes busy professionals extend their trips and come back different.
        </p>
        
        <p>
          But you keep pushing it off. Waiting for the "right time." Waiting for life to slow down. Waiting for permission you don't actually need.
        </p>
        
        <p className="font-semibold text-foreground">Here's what waiting costs you:</p>
        
        <p>
          It costs the sunrise camel ride through dunes that teach you what silence actually sounds like. It costs mint tea with Berber families who redefine what community means. It costs discovering why riads are built around courtyards — for connection, not separation.
        </p>
        
        <p>
          Every year you wait, Morocco continues without you. And the version of yourself that needs this transformation keeps waiting, too.
        </p>
      </div>
      
      <blockquote className="my-8 pl-6 border-l-4 border-primary font-heading text-lg md:text-xl italic text-foreground">
        "I thought I was going to see Morocco. I didn't realize Morocco would show me who I was before success made me forget."
        <footer className="mt-3 text-sm text-muted-foreground not-italic">
          — Marcus T., returning traveler
        </footer>
      </blockquote>
      
      <div className="space-y-5 text-foreground/85 text-base md:text-lg leading-relaxed">
        <p>
          That's why <strong className="text-foreground">over 2,500 travelers</strong> have stopped waiting and said yes to Morocco.
        </p>
        
        <p>
          They came as strangers. They left as family. They returned home transformed — not by changing who they are, but by remembering who they were before the grind buried it.
        </p>
        
        <p className="text-xl md:text-2xl font-semibold text-primary text-center mt-8">
          Your time is now.
        </p>
      </div>
    </div>
  );
};

export default StorySection;
