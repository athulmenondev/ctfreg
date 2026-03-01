import React, { useEffect, useRef } from 'react';
import anime from 'animejs';

export default function WhatsappLink() {
  const containerRef = useRef(null);

  useEffect(() => {
    anime({
      targets: containerRef.current,
      opacity: [0, 1],
      translateY: [20, 0],
      scale: [0.95, 1],
      duration: 800,
      easing: 'easeOutElastic(1, 0.6)',
    });
    
    // Animate glow effect
    anime({
      targets: '.wa-glow',
      opacity: [0.3, 0.8],
      scale: [0.98, 1.02],
      direction: 'alternate',
      loop: true,
      duration: 2000,
      easing: 'easeInOutSine'
    });
  }, []);

  return (
    <div ref={containerRef} className="relative mt-2 mb-8 group opacity-0" style={{ maxWidth: '400px', width: '100%' }}>
      <div className="wa-glow absolute -inset-1 bg-gradient-to-r from-neon-green to-emerald-500 rounded-xl blur opacity-40 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
      
      <a 
        href="#" 
        target="_blank" 
        rel="noopener noreferrer"
        className="relative flex items-center gap-4 bg-[#02080c] border border-neon-green/30 px-6 py-5 rounded-xl overflow-hidden transition-all hover:border-neon-green/60 hover:-translate-y-1 block"
      >
        <div className="absolute inset-0 bg-neon-green/5 group-hover:bg-neon-green/10 transition-colors"></div>
        <div className="scanline-overlay"></div>
        
        {/* WhatsApp Icon SVG */}
        <div className="w-12 h-12 flex-shrink-0 bg-neon-green/10 rounded-full flex items-center justify-center border border-neon-green/40 shadow-[0_0_15px_rgba(0,255,136,0.3)]">
          <svg className="w-6 h-6 text-neon-green" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.878-.788-1.47-1.761-1.643-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
          </svg>
        </div>

        {/* Text Details */}
        <div className="text-left flex-1 relative z-10">
          <h4 className="text-neon-green font-mono text-[10px] sm:text-xs font-bold tracking-[3px] uppercase mb-1 drop-shadow-[0_0_5px_rgba(0,255,136,0.8)]">
            System Alert // Required
          </h4>
          <p className="text-white/80 font-mono text-[11px] sm:text-sm">
            Join the official WhatsApp group for intel & updates
          </p>
        </div>

        {/* Arrow element */}
        <div className="ml-auto flex items-center justify-center transform group-hover:translate-x-1 transition-transform">
           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-neon-green/80 drop-shadow-[0_0_5px_rgba(0,255,136,0.5)]">
             <line x1="5" y1="12" x2="19" y2="12"></line>
             <polyline points="12 5 19 12 12 19"></polyline>
           </svg>
        </div>
      </a>
    </div>
  );
}
