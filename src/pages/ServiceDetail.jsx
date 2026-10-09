import { Link } from 'react-router';
import { Section, Heading, Prose, Button } from '../components/ui';
import { Footer } from '../components';
import ServicePageTemplate from '../components/ServicePageTemplate';
import { serviceBySlug } from '../constants/services';
import { pageMeta } from './pageMeta';

// A single dynamic route (`/services/:slug`) serves all seven services —
// see src/routes.js. The service list itself lives only in
// src/constants/services.js; nothing here enumerates slugs.
export const meta = ({ params }) => {
  const service = serviceBySlug(params.slug);

  if (!service) {
    return pageMeta({
      title: 'Service Not Found | Xpatios',
      description: 'That service page does not exist.',
      path: `/services/${params.slug ?? ''}`,
      noindex: true,
    });
  }

  return pageMeta({
    title: service.title,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
  });
};

const ServiceDetail = ({ params }) => {
  const service = serviceBySlug(params.slug);

  if (!service) {
    return (
      <>
        <Section spacing="loose">
          <Heading as="h1" size="h1">
            Service not found
          </Heading>
          <Prose size="lede" className="mt-6">
            We couldn&rsquo;t find a service at that address. It may have
            been renamed or moved, take a look at the full list instead.
          </Prose>
          <Button as={Link} to="/services" className="mt-8">
            View all services
          </Button>
        </Section>
        <Footer />
      </>
    );
  }

  return (
    <>
      <ServicePageTemplate service={service} />
      <Footer />
    </>
  );
};

export default ServiceDetail;
