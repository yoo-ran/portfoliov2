'use client';

import { useState } from 'react';
import { Loader2 } from 'lucide-react';

export default function DemoVideo({
  youtubeId,
  title,
}: {
  youtubeId: string;
  title: string;
}) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="overflow-hidden rounded-2xl border-2 border-beige h-full">
      <div className="relative aspect-[11/12] lg:aspect-video w-full h-full bg-black">
        {isLoading && (
          <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/70">
            <Loader2 className="h-8 w-8 animate-spin text-beige" />
          </div>
        )}

        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube.com/embed/${youtubeId}`}
          title={title}
          onLoad={() => setIsLoading(false)}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}
