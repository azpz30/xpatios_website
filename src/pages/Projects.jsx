import { Link } from 'react-router';
import { Section, Heading, Prose, Label, Button } from '../components/ui';
import { Footer } from '../components';
import { services } from '../constants/services';
import { pageMeta } from './pageMeta';

const TITLE = 'Recent Projects | Xpatios Sydney Patios, Carports & Roofing';
const DESCRIPTION =
  'Completed Sydney patio, carport, decking and roofing projects from Xpatios, case studies by suburb, service and approval pathway.';

export const meta = () => pageMeta({ title: TITLE, description: DESCRIPTION, path: '/projects' });

/**
 * No project data exists yet. `PROJECTS` is deliberately typed as an empty
 * array and rendered through the same `.map()` a populated list would use,
 * so wiring in real entries later is a data change, not a page rewrite.
 *
 * Suggested shape for each entry (see docs/09-PROJECTS-CONTENT-ENGINE.md):
 *   {
 *     slug: 'insulated-patio-castle-hill',
 *     title: 'Insulated Cooldek patio — Castle Hill',
 *     serviceSlug: 'patios-pergolas-sydney', // ref into services.js
 *     suburb: 'Castle Hill',
 *     council: { path: 'exempt' | 'cdc' | 'da' },
 *     materials: ['Colorbond Cooldek — Surfmist'],
 *     sizeM2: 32,
 *     completedAt: '2026-03',
 *     heroImage: '/assets/projects/...',
 *     beforeImage: '/assets/projects/...',
 *     afterImage: '/assets/projects/...',
 *     clientQuote: { text: '...', name: 'First name, suburb' },
 *   }
 *
 * One entry is meant to auto-populate several surfaces (this index, the
 * matching service page's "recent projects" module, the gallery, and
 * eventually a suburb page) — see the content-engine doc for the full
 * picture. None of that wiring exists yet; this page is the shell it plugs
 * into.
 */
const PROJECTS = [];

const Projects = () => (
  <>
    <Section spacing="tight" as="div">
      <Label>Our work</Label>
      <Heading as="h1" size="h1" className="mt-4 max-w-[22ch]">
        Recent Sydney projects
      </Heading>
      <Prose size="lede" className="mt-6">
        Case studies from completed jobs across Greater Sydney, the
        service, the suburb, the council pathway, and what it looked like
        before and after. We&rsquo;re building this archive out project by
        project.
      </Prose>
    </Section>

    <Section hairline>
      {PROJECTS.length === 0 ? (
        <div className="hairline-t py-16 text-center">
          <Heading as="h2" size="h3">
            Case studies are being added
          </Heading>
          <Prose className="mx-auto mt-4">
            We&rsquo;re documenting completed jobs as case studies , 
            service, suburb, materials and council approval pathway for
            each. In the meantime, browse recent work in the gallery or see
            what we build by service.
          </Prose>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button as={Link} to="/gallery">
              View the gallery
            </Button>
            <Button as={Link} to="/services" variant="outline">
              Browse services
            </Button>
          </div>
        </div>
      ) : (
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <article key={project.slug}>
              <Heading as="h2" size="h3">
                {project.title}
              </Heading>
              <p className="mt-2 text-small text-muted">{project.suburb}</p>
            </article>
          ))}
        </div>
      )}
    </Section>

    <Section hairline>
      <Label>Every service, every suburb</Label>
      <Heading as="h2" size="h2" className="mt-4">
        Explore by service
      </Heading>
      <Prose className="mt-6">
        While the project archive builds up, each service page carries its
        own detail, types, benefits and the NSW council approval pathway.
      </Prose>
      <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
        {services.map((service) => (
          <li key={service.slug}>
            <Link
              to={`/services/${service.slug}`}
              className="text-body text-ink underline decoration-hairline underline-offset-[6px] hover:decoration-accent"
            >
              {service.name}
            </Link>
          </li>
        ))}
      </ul>
    </Section>

    <Footer />
  </>
);

export default Projects;
