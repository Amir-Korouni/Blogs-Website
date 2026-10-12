const Loading = () => {
  return (
    <main className="w-full min-h-screen flex flex-col items-center justify-center gap-6 bg-background">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-muted border-t-primary" />

      <p className="text-muted-foreground animate-pulse">Loading posts...</p>
    </main>
  );
};

export default Loading;
