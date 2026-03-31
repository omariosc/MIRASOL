import PageHeader from '../components/PageHeader'
import ScrollReveal from '../components/ScrollReveal'
import DatesTimeline from '../components/DatesTimeline'

export default function AmbassadorProgram() {
  return (
    <>
      <PageHeader title="Ambassador Program" />

      {/* Call for Ambassadors */}
      <ScrollReveal className="content-block">
        <div className="content-block__container"><div className="text-block"><div className="rte">
          <h2>Call for MICCAI 2026 Workshop Ambassadors</h2>
          <p>Every year, a number of authors with accepted papers at MICCAI struggle to get funding support and visas to attend the conference and present their work. This disproportionately impacts authors from Low- and Middle-Income Countries (LMICs), putting their work at risk of not being published and shared to advance innovations.</p>
          <p>This year, we invite the MICCAI community to help us ensure that as many papers from authors around the world are presented at the 2026 conference, despite these travel constraints. We welcome early career researchers, postdoctoral fellows, graduate students and residents to apply to the Ambassadors Program and &ldquo;adopt a lab&rdquo; in need. Ambassadors will be paired with authors of accepted papers who have exhausted their attempts to attend the conference and present the papers on their behalf. This program only supports presentations at satellite events.</p>
        </div></div></div>
      </ScrollReveal>

      {/* Eligibility & Benefits - 2 cards */}
      <ScrollReveal className="content-block -alt">
        <div className="content-block__container">
          <div className="focus-cards">
            <div className="focus-card -icon-inline">
              <div className="focus-card__header">
                <div className="focus-card__number">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><polyline points="17 11 19 13 23 9"/></svg>
              </div>
                <h3>Eligibility Requirements</h3>
              </div>
              <ul style={{ textAlign: 'left', color: 'var(--gray-600)', fontSize: '0.95rem', lineHeight: 1.6, paddingLeft: '0.2rem', margin: 0 }}>
                <li>Open to early career researchers, postdoctoral fellows, graduate students and residents</li>
                <li>Attending MICCAI 2026 in Abu Dhabi in person</li>
                <li>Must be registered to attend MICCAI 2026 satellite events</li>
                <li>Commit to present one poster in person during the assigned paper presentation</li>
              </ul>
            </div>
            <div className="focus-card -icon-inline">
              <div className="focus-card__header">
                <div className="focus-card__number">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              </div>
                <h3>Benefits of Joining</h3>
              </div>
              <ul style={{ textAlign: 'left', color: 'var(--gray-600)', fontSize: '0.95rem', lineHeight: 1.6, paddingLeft: '0.2rem', margin: 0 }}>
                <li>Broaden your scope of the field by learning from other labs</li>
                <li>Grow your network by making new collaborations and friends from around the world</li>
                <li>Hone your science communications skills</li>
                <li>Be recognized in the MICCAI community as an emerging expert in the field</li>
                <li>Help democratize medical imaging innovations</li>
              </ul>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Application Process - Timeline */}
      <ScrollReveal className="content-block">
        <div className="content-block__container">
          <div className="rte" style={{ marginBottom: '1.5rem' }}>
            <h2>Join the Program</h2>
          </div>
          <div className="timeline">
            <div className="timeline__step">
              <div className="timeline__dot">1</div>
              <h3>Apply</h3>
              <p>Complete the application using the link below.</p>
            </div>
            <div className="timeline__step">
              <div className="timeline__dot">2</div>
              <h3>Accept Offer &amp; Matching</h3>
              <p>Accept the offer to join the program and be matched with a research group or laboratory facing travel restrictions.</p>
            </div>
            <div className="timeline__step">
              <div className="timeline__dot">3</div>
              <h3>Meet Your Matches</h3>
              <p>Meet with your matches, learn about their MICCAI paper, and review their poster.</p>
            </div>
            <div className="timeline__step">
              <div className="timeline__dot">4</div>
              <h3>Present at the Workshop</h3>
              <p>Pick up the poster from the workshop chairs and present it at the workshop.</p>
            </div>
            <div className="timeline__step">
              <div className="timeline__dot">5</div>
              <h3>Stay Connected</h3>
              <p>Stay in touch with your matches to share your experience at MICCAI and continue collaboration.</p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Key Dates */}
      <ScrollReveal className="content-block -alt">
        <div className="content-block__container"><div className="text-block">
          <div className="rte"><h2>Key Dates</h2></div>
          <DatesTimeline items={[
            { label: 'Call Opens', value: 'TBC' },
            { label: 'Call Closes', value: 'TBC' },
            { label: 'Notification and Matching', value: 'TBC' },
            { label: 'Workshop Date', value: '04 or 08 October 2026', date: '2026-10-08' },
          ]} />
        </div></div>
      </ScrollReveal>

      {/* FAQ */}
      <ScrollReveal className="content-block">
        <div className="content-block__container"><div className="text-block">
          <div className="rte"><h2>Frequently Asked Questions</h2></div>
          <div className="faq-list">
            <div className="faq-item"><h4>Is the program open to students globally?</h4><p>Yes, any student attending MICCAI 2026 in person is eligible to apply, regardless of their country of origin.</p></div>
            <div className="faq-item"><h4>Do I need prior MICCAI experience?</h4><p>No prior experience is required. However, priority will be given to eligible individuals who have previous experience giving oral or poster presentations at MICCAI.</p></div>
            <div className="faq-item"><h4>Can I participate remotely?</h4><p>No. Only in-person attendees qualify. The ambassador must be physically present at MICCAI 2026 in Abu Dhabi to present the poster.</p></div>
            <div className="faq-item"><h4>Do I need to register for satellite events?</h4><p>Yes. Even those registered for the main conference must register separately for satellite events. Satellite event registration is required to participate as an ambassador.</p></div>
            <div className="faq-item"><h4>What are the poster presentation obligations?</h4><p>Ambassadors must collect the poster from the MIRASOL organizing committee and display it at the designated presentation area. Each ambassador commits to presenting one poster at the workshop on behalf of the matched author.</p></div>
            <div className="faq-item"><h4>What if I have travel restrictions?</h4><p>Applicants with travel restrictions should not apply. The program is designed to help authors who cannot attend, not attendees with restrictions. Only individuals who are confirmed to attend MICCAI 2026 in person should apply.</p></div>
          </div>
        </div></div>
      </ScrollReveal>
    </>
  )
}
