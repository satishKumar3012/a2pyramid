import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
}

export const useSEO = ({ title, description, canonical }: SEOProps = {}) => {
  const location = useLocation();

  useEffect(() => {
    // Update title
    if (title) {
      document.title = `${title} | A2 Pyramid`;
    }

    // Update description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (description && metaDescription) {
      metaDescription.setAttribute('content', description);
    }

    // Update canonical URL
    let canonicalUrl = canonical || `https://a2pyramid.com${location.pathname}`;
    
    // Remove trailing slash for consistency
    if (canonicalUrl.endsWith('/') && canonicalUrl !== 'https://a2pyramid.com/') {
      canonicalUrl = canonicalUrl.slice(0, -1);
    }

    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', canonicalUrl);

    // Update Open Graph tags
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute('content', canonicalUrl);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (title && ogTitle) {
      ogTitle.setAttribute('content', `${title} | A2 Pyramid`);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (description && ogDescription) {
      ogDescription.setAttribute('content', description);
    }
  }, [location, title, description, canonical]);
};

export default useSEO;