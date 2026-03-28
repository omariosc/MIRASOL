import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import ScrollReveal from '../components/ScrollReveal'
import DatesTimeline from '../components/DatesTimeline'

export default function CallForPapers() {
  return (
    <>
      <PageHeader title="Call for Papers" />

      <ScrollReveal className="content-block">
        <div className="content-block__container">
          <div className="rte" style={{ marginBottom: '1.5rem' }}>
            <h2>Workshop Core Focus Areas</h2>
            <p>The workshop welcomes conference paper submissions in the following core areas of focus:</p>
          </div>
          <div className="focus-cards" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            <div className="focus-card -watermark">
              <div className="focus-card__number">1</div>
              <h3>Overcoming Healthcare Barriers in RCS</h3>
              <ul>
                <li>Address poor imaging quality, scan completeness, and data sharing challenges</li>
                <li>Utilise affordable X-rays, ultrasound, and smartphone diagnostics</li>
                <li>Deploy biosignals like EEG and ECG for cost-effective diagnoses</li>
                <li>Propose low-cost image-guided therapies and computer-integrated interventions</li>
              </ul>
            </div>
            <div className="focus-card -watermark">
              <div className="focus-card__number">2</div>
              <h3>Methodological Advances in ML</h3>
              <ul>
                <li>Enhance image quality with innovative techniques for low-cost devices</li>
                <li>Develop data-efficient ML models suited for RCS sparse data environments</li>
                <li>Implement robust strategies for handling missing and noisy data</li>
                <li>Apply cost-effective transfer learning and domain adaptation</li>
                <li>Focus on AI model bias mitigation and model compression for equity and resource efficiency</li>
              </ul>
            </div>
            <div className="focus-card -watermark">
              <div className="focus-card__number">3</div>
              <h3>Driving ML Innovations for Improved Care</h3>
              <ul>
                <li>Tailor ML algorithms to meet specific medical imaging challenges in RCS</li>
                <li>Advance early disease detection and monitoring with minimal resources</li>
                <li>Leverage multimodal data for predictive analytics in patient management</li>
                <li>Evaluate ML&rsquo;s impact on healthcare access and policies in RCS</li>
                <li>Accelerate the adoption of ML innovations for sustainable healthcare improvements</li>
                <li>Develop solutions to manage data scarcity and optimise computational resources</li>
              </ul>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal className="content-block">
        <div className="content-block__container">
          <div className="text-block">
            <div className="rte">
              <h2>Awards and Grants</h2>
              <p>Two awards will be presented at the workshop:</p>
            </div>
            <div className="awards-grid">
              <div className="award-card">
                <div className="amount">$500</div>
                <div className="label">Best Paper Award</div>
                <p style={{ fontSize: '0.85rem', color: 'var(--gray-500)', marginTop: '0.5rem' }}>For the highest quality paper, selected based on the review results.</p>
              </div>
              <div className="award-card">
                <div className="amount">$500</div>
                <div className="label">People&rsquo;s Choice Award</div>
                <p style={{ fontSize: '0.85rem', color: 'var(--gray-500)', marginTop: '0.5rem' }}>Chosen by attendees, recognizing the contributed paper that best captures the workshop focus with demonstrated impact in RCS.</p>
              </div>
            </div>
            <div className="rte">
              <p><strong>Travel Grants</strong> &ndash; To provide opportunity for exceptional LMIC researchers from underrepresented regions and global researchers needing support, the sponsorship committee collaborates with MICCAI to supplement conference registration costs, provide travel stipends, and best paper awards.</p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal className="content-block">
        <div className="content-block__container">
          <div className="text-block">
            <div className="rte"><h2>Important Dates</h2></div>
            <DatesTimeline items={[
              { label: 'Paper Submission Deadline', value: 'TBD' },
              { label: 'Notification of Acceptance', value: 'TBD' },
              { label: 'Camera-Ready Deadline', value: 'TBD' },
              { label: 'Workshop Date', value: 'TBD (October 2026)' },
            ]} />
            <div className="notice"><strong>Note:</strong> All dates are for 2026 and will be announced soon. All deadlines are at 23:59 Anywhere on Earth (AoE).</div>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal className="content-block">
        <div className="content-block__container">
          <div className="text-block -inline">
            <div className="rte"><p>Ready to contribute? Review the submission guidelines and prepare your manuscript.</p></div>
            <Link className="action-element -primary" to="/how-to-submit">How to Submit</Link>
          </div>
        </div>
      </ScrollReveal>
    </>
  )
}
