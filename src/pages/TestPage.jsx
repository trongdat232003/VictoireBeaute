// Test page để verify Tailwind CSS hoạt động
const TestPage = () => {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-primary">
          Tailwind CSS Test Page
        </h1>
        
        <div className="bg-surface p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold text-on-surface mb-4">
            Colors Test
          </h2>
          <div className="grid grid-cols-4 gap-4">
            <div className="bg-primary h-20 rounded flex items-center justify-center text-on-primary">
              Primary
            </div>
            <div className="bg-secondary h-20 rounded flex items-center justify-center text-on-secondary">
              Secondary
            </div>
            <div className="bg-primary-container h-20 rounded flex items-center justify-center text-on-primary-container">
              Container
            </div>
            <div className="bg-surface-container h-20 rounded flex items-center justify-center text-on-surface">
              Surface
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Typography Test</h2>
          <p className="font-display-lg text-display-lg mb-2">Display Large</p>
          <p className="font-headline-md text-headline-md mb-2">Headline Medium</p>
          <p className="font-title-lg text-title-lg mb-2">Title Large</p>
          <p className="font-body-lg text-body-lg mb-2">Body Large</p>
          <p className="font-body-sm text-body-sm">Body Small</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Spacing Test</h2>
          <div className="space-y-4">
            <div className="bg-primary-container p-4 rounded">Padding 4</div>
            <div className="bg-secondary-container p-6 rounded">Padding 6</div>
            <div className="bg-tertiary-container p-8 rounded">Padding 8</div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Icons Test</h2>
          <div className="flex gap-4 text-4xl">
            <span className="material-symbols-outlined text-primary">favorite</span>
            <span className="material-symbols-outlined text-secondary">shopping_bag</span>
            <span className="material-symbols-outlined text-tertiary">person</span>
            <span className="material-symbols-outlined text-primary">star</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Button Test</h2>
          <div className="flex gap-4">
            <button className="bg-primary text-on-primary px-6 py-3 rounded-full hover:opacity-90 transition-opacity">
              Primary Button
            </button>
            <button className="border border-primary text-primary px-6 py-3 rounded-full hover:bg-primary-fixed-dim/10 transition-colors">
              Secondary Button
            </button>
          </div>
        </div>

        <div className="glass-panel p-6 rounded-xl">
          <h2 className="text-2xl font-semibold mb-4">Glass Effect Test</h2>
          <p className="text-secondary">
            This should have a glass morphism effect with blur and transparency.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestPage;
