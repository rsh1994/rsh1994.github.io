// src/components/SEO.tsx
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
}

export function SEO({ 
  title = 'RSH Tech Blog | Backend & Data Engineering', 
  description = '데이터 엔지니어링과 백엔드 개발, 클라우드 아키텍처에 대한 기술적 인사이트를 공유합니다. BigQuery, AWS, 데이터 파이프라인, 시스템 설계에 대한 실무 경험을 기록합니다.',
  keywords = 'Data Engineering, Backend Development, BigQuery, AWS, ETL, 데이터 파이프라인, 시스템 설계, Python, Django, Docker, Podman, GCP',
  ogImage = '/images/og-tech-blog.png' // 적절한 OG 이미지 필요
}: SEOProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Seong Hoon Ryu" />
      
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Additional Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#000000" />
      <link rel="canonical" href="https://rsh1994.github.io" />
    </Helmet>
  );
}