import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const SITE_NAME = 'MIRASOL Workshop | MICCAI 2026'
const BASE_DESCRIPTION = 'MIRASOL - Medical Image Computing in Resource Constrained Settings Workshop & Knowledge Interchange at MICCAI 2026, Abu Dhabi, UAE. Building and Sustaining Efficient Technologies for Medical Imaging in Resource-Constrained Settings.'

const pageMeta = {
  '/': {
    title: 'MIRASOL Workshop | MICCAI 2026 - Abu Dhabi, UAE',
    description: BASE_DESCRIPTION,
  },
  '/call-for-papers': {
    title: 'Call for Papers | MIRASOL Workshop - MICCAI 2026',
    description: 'Submit your research to the MIRASOL Workshop at MICCAI 2026. Focus areas: ML for medical imaging in resource-constrained settings, clinical outcome prediction, health equity, and capacity building in LMICs.',
  },
  '/how-to-submit': {
    title: 'How to Submit | MIRASOL Workshop - MICCAI 2026',
    description: 'Submission guidelines for the MIRASOL Workshop at MICCAI 2026. Springer LNCS format, double-blind review, 8-page papers. Submit via OpenReview.net portal.',
  },
  '/nextgen-interchange': {
    title: 'NextGen Interchange | MIRASOL Workshop - MICCAI 2026',
    description: 'NextGen Interchange connects early-career researchers and startups with industry leaders at MICCAI 2026. Present your innovation in medical imaging for low-resource settings.',
  },
  '/ambassador-program': {
    title: 'Ambassador Program | MIRASOL Workshop - MICCAI 2026',
    description: 'MIRASOL Ambassador Program at MICCAI 2026 Abu Dhabi. Present research on behalf of LMIC authors who cannot attend. Support inclusive research dissemination.',
  },
  '/organising-committee': {
    title: 'Organising Committee | MIRASOL Workshop - MICCAI 2026',
    description: 'Meet the MIRASOL Workshop organising committee - researchers, clinicians, and trainees from Africa, Asia, and around the world working on medical imaging in resource-constrained settings.',
  },
  '/schedule': {
    title: 'Schedule & Program | MIRASOL Workshop - MICCAI 2026',
    description: 'Full schedule for the MIRASOL Workshop thematic day at MICCAI 2026, Abu Dhabi. Joint sessions with AFRICAI and Tuberc Challenge. Keynotes, paper presentations, poster sessions, and NextGen Interchange.',
  },
  '/keynote-speakers': {
    title: 'Keynote Speakers | MIRASOL Workshop - MICCAI 2026',
    description: 'Keynote speakers for the MIRASOL Workshop at MICCAI 2026. Distinguished researchers in medical imaging, federated learning, and AI for healthcare in resource-constrained settings.',
  },
}

export default function SEO() {
  const { pathname } = useLocation()

  useEffect(() => {
    const meta = pageMeta[pathname] || pageMeta['/']
    document.title = meta.title

    // Update meta description
    let descTag = document.querySelector('meta[name="description"]')
    if (descTag) descTag.setAttribute('content', meta.description)

    // Update OG tags
    const ogTags = { 'og:title': meta.title, 'og:description': meta.description, 'og:url': window.location.href }
    Object.entries(ogTags).forEach(([prop, content]) => {
      let tag = document.querySelector(`meta[property="${prop}"]`)
      if (!tag) {
        tag = document.createElement('meta')
        tag.setAttribute('property', prop)
        document.head.appendChild(tag)
      }
      tag.setAttribute('content', content)
    })
  }, [pathname])

  return null
}
