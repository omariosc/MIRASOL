import { img } from '../utils'

const SUNFLOWER = 'https://cdn.fourwaves.com/static/media/speakercontent/a571ad53-1984-495c-b239-01f9a3cb1175/43af4dcd-3b4b-41df-a4df-618c89994339.png'

export const committeeSections = [
  {
    title: 'Chairs',
    members: [
      { name: 'Udunna Anazodo, PhD', affiliation: 'McGill University & MAI Lab, Nigeria', photo: 'https://cdn.fourwaves.com/static/media/speakercontent/e3d9db3d-b077-47e3-9529-c1d5e9b2a411/a7f4c594-d51e-488f-b58d-820f17f6bd27.jpeg' },
      { name: 'Karim Lekadir, PhD', affiliation: 'Universitat de Barcelona, Spain', photo: 'https://cdn.fourwaves.com/static/media/speakercontent/e3d9db3d-b077-47e3-9529-c1d5e9b2a411/3a7fa96f-b60f-4eb5-8f0b-ab66269a2a06.jpeg' },
      { name: 'Tinashe Mutsvangwa, PhD', affiliation: 'IMT-Atlantique, France & UCT, South Africa', photo: 'https://cdn.fourwaves.com/static/media/speakercontent/e3d9db3d-b077-47e3-9529-c1d5e9b2a411/130e330c-b922-44ec-9e44-5e875fc5de32.jpeg' },
      { name: 'Bishesh Khanal, PhD', affiliation: 'NAAMII, Nepal', photo: 'https://cdn.fourwaves.com/static/media/speakercontent/e3d9db3d-b077-47e3-9529-c1d5e9b2a411/7f883ecf-be69-4544-85e5-71be57a43603.jpg' },
      { name: 'Abdalla Mohamed, PhD', affiliation: 'UAE University, Abu Dhabi, UAE', photo: SUNFLOWER },
    ]
  },
  {
    title: 'Program Committee',
    members: [
      { name: 'Mehmet Kurt, PhD', role: 'Chair', affiliation: 'University of Washington, USA', photo: 'https://cdn.fourwaves.com/static/media/speakercontent/e3d9db3d-b077-47e3-9529-c1d5e9b2a411/8318c9e4-feee-43ac-9e65-d56d4b8167a7.jpeg' },
      { name: 'Dong Zhang, MSc', role: 'Co-Chair', affiliation: 'University of British Columbia, Canada', photo: 'https://cdn.fourwaves.com/static/media/speakercontent/8a47d081-0496-4dd9-a2e6-113a18b7ff61/e6dd48ec-cf7b-4054-8562-9a7144f44ca3.jpeg' },
      { name: 'Tareen Dawood', role: 'Co-Chair, Keynote Speakers', affiliation: 'RISE-MICCAI / DTU, Denmark', photo: SUNFLOWER },
      { name: 'Qingjie Meng', affiliation: 'RISE-MICCAI / University of Birmingham, UK', photo: SUNFLOWER },
      { name: 'Waqas Sultani, PhD', affiliation: 'Information Technology University, Pakistan', photo: 'https://cdn.fourwaves.com/static/media/speakercontent/8a47d081-0496-4dd9-a2e6-113a18b7ff61/f329b100-b2b9-4e4a-a0e6-915218d1837b.jpeg' },
      { name: 'Pamela Guevara, PhD', affiliation: 'Universidad de Concepción, Chile', photo: 'https://cdn.fourwaves.com/static/media/speakercontent/8a47d081-0496-4dd9-a2e6-113a18b7ff61/fd8e3c95-dc80-4542-a703-304644d4985e.jpeg' },
      { name: 'Miguel Lopez-Perez', affiliation: 'University of Granada, Spain', photo: SUNFLOWER },
      { name: 'Maruf Adewole, PhD', affiliation: 'MAI Lab, Nigeria', photo: 'https://cdn.fourwaves.com/static/media/speakercontent/8a47d081-0496-4dd9-a2e6-113a18b7ff61/255f02f0-01f8-42ff-88ac-ca16115b1ef2.jpeg' },
      { name: 'Natasha Lepore, PhD', affiliation: 'USC, USA', photo: 'https://api.fourwaves.com/api/files/serve/f4b20f5a-4d5a-4b4c-96d6-d6e1b19e2be0' },
    ]
  },
  {
    title: 'Publication Committee',
    members: [
      { name: 'Alessandro Crimi, PhD', role: 'Chair', affiliation: 'AGH University, Poland & AIMS, Ghana', photo: 'https://api.fourwaves.com/api/files/serve/aea7b109-7623-4497-b741-0917ace50e14' },
      { name: 'Jin Kim', role: 'Co-Chair', affiliation: 'UCLA, USA', photo: img('jin-kim.webp') },
      { name: 'Xiaomeng Li, PhD', affiliation: 'Hong Kong University, China', photo: 'https://cdn.fourwaves.com/static/media/speakercontent/e2e3a412-946f-41f5-9cef-281f57f6c5cf/d2391b8b-b6ce-46ad-9bec-60e7eb8cf51b.png' },
    ]
  },
  {
    title: 'Sponsorship & Diversity Committee',
    members: [
      { name: 'Marius George Linguraru, PhD', role: 'Chair', affiliation: "Children's National Hospital, USA", photo: 'https://cdn.fourwaves.com/static/media/speakercontent/b604c3e8-862a-42c6-afda-465021a9703d/37c0a6a6-0e0e-4a53-a90d-19881ec59991.jpeg' },
      { name: 'Charles Delahunt, PhD', role: 'Co-Chair', affiliation: 'RISE-MICCAI / Global Health Labs, Seattle, USA', photo: 'https://cdn.fourwaves.com/static/media/speakercontent/b604c3e8-862a-42c6-afda-465021a9703d/027f49ea-5aa1-4e78-b7bb-fa9d26b7a32f.jpeg' },
      { name: 'Andrea Lara, PhD', role: 'Co-Chair', affiliation: 'RISE-MICCAI / Universidad Galileo, Guatemala', photo: 'https://api.fourwaves.com/api/files/serve/56795c3e-b184-4eaa-a0fe-883ef28f2243' },
      { name: 'Esther Puyol Anton, PhD', affiliation: 'RISE-MICCAI / HeartFlow, UK', photo: 'https://api.fourwaves.com/api/files/serve/552dde2a-ccbb-4b77-91e6-7966bea0c43e' },
      { name: 'Qingjie Meng', affiliation: 'RISE-MICCAI / University of Birmingham, UK', photo: SUNFLOWER },
      { name: 'Olawale Ajose', affiliation: 'Market Access Africa', photo: SUNFLOWER },
      { name: 'Tarisiro Matiza', affiliation: 'Market Access Africa', photo: SUNFLOWER },
    ]
  },
  {
    title: 'ECR Committee',
    members: [
      { name: 'Confidence Raymond, MSc', role: 'Chair', affiliation: 'McGill University, Canada', photo: 'https://cdn.fourwaves.com/static/media/speakercontent/5c8cad83-f29d-40f7-9caf-4a86dfa524da/95f70133-37bc-4a4f-80ff-efb631788b90.jpeg' },
      { name: 'Sahar Selim, PhD', role: 'Co-Chair', affiliation: 'Nile University, Egypt', photo: 'https://api.fourwaves.com/api/files/serve/a2d5823e-4b6f-4b6e-b986-3a9f0f66d621' },
      { name: 'Oumayma Soula', role: 'Co-Chair', affiliation: 'University of Sfax, Tunisia', photo: 'https://api.fourwaves.com/api/files/serve/2120b400-6eb0-4c16-b4b7-9f89d29f1942' },
      { name: 'Aondona Iorumbur, MSc', affiliation: 'MAI Lab, Lagos, Nigeria', photo: SUNFLOWER },
      { name: 'Mohannad Barakat, BSc', affiliation: 'FAU, Germany', photo: 'https://api.fourwaves.com/api/files/serve/b70c5595-40f1-44f2-8fac-215a8ef4d3ba' },
      { name: 'Noha Magdy, BSc', affiliation: 'FAU, Germany', photo: 'https://api.fourwaves.com/api/files/serve/50a13ff0-f49f-4ed0-ba8d-1a882a204c15' },
      { name: 'Abbas M Rabiu, MD MSc', affiliation: 'AKTH, Nigeria', photo: 'https://api.fourwaves.com/api/files/serve/90e53f59-4178-441e-a9fb-8957b8a51338' },
      { name: 'Kelvin Murithi, MD', affiliation: 'Sonar Imaging, Kenya', photo: 'https://cdn.fourwaves.com/static/media/speakercontent/5c8cad83-f29d-40f7-9caf-4a86dfa524da/f24f1239-c1f9-4a2e-9748-fc18d017581b.png' },
      { name: 'Mubaraq Yakubu, MSc', affiliation: "King's College London, UK", photo: 'https://cdn.fourwaves.com/static/media/speakercontent/5c8cad83-f29d-40f7-9caf-4a86dfa524da/29e4afc0-61cd-4f59-9da9-7de435f96b32.jpeg' },
      { name: 'Lukman Enegi Ismaila', affiliation: 'Johns Hopkins, USA', photo: SUNFLOWER },
    ]
  },
  {
    title: 'Communication Committee',
    members: [
      { name: 'Omar Choudhry, PhD', role: 'Co-Chair', affiliation: 'RISE-MICCAI / University of Leeds, UK', photo: SUNFLOWER },
      { name: 'Juhi Tulsi, MD', affiliation: 'CAMERA, Canada', photo: 'https://api.fourwaves.com/api/files/serve/d622b4e0-26f3-408f-9f0c-1785f815ad3c' },
    ]
  },
  {
    title: 'Advisors',
    members: [
      { name: 'Amal Saleh, MD', affiliation: 'Addis Ababa University, Ethiopia', photo: 'https://api.fourwaves.com/api/files/serve/76f33426-0a84-4989-b522-791718f2abf5' },
      { name: 'Farouk Dako, MD, MPH', affiliation: 'University of Pennsylvania, USA', photo: 'https://cdn.fourwaves.com/static/media/speakercontent/e3d9db3d-b077-47e3-9529-c1d5e9b2a411/5bc938d7-5fca-4ae1-b468-20bf7300d2aa.jpeg' },
      { name: 'Osumane Sall, PhD', affiliation: 'UN-CHK, Senegal', photo: SUNFLOWER },
      { name: 'Alexander Hammers, MD PhD', affiliation: "King's College London, UK", photo: 'https://cdn.fourwaves.com/static/media/speakercontent/a571ad53-1984-495c-b239-01f9a3cb1175/b33d1214-38b1-4f38-a3c0-5fe707f389a0.jpeg' },
    ]
  },
]

export const committee2025Sections = [
  {
    title: 'Workshop Chairs',
    members: [
      { name: 'Udunna Anazodo, PhD', role: 'General Chair', affiliation: 'McGill University, Montreal, Canada', photo: 'https://cdn.fourwaves.com/static/media/speakercontent/e3d9db3d-b077-47e3-9529-c1d5e9b2a411/a7f4c594-d51e-488f-b58d-820f17f6bd27.jpeg' },
      { name: 'Karim Lekadir, PhD', role: 'Chair, Diversity & Sponsorship', affiliation: 'Universitat de Barcelona, Spain', photo: 'https://cdn.fourwaves.com/static/media/speakercontent/e3d9db3d-b077-47e3-9529-c1d5e9b2a411/3a7fa96f-b60f-4eb5-8f0b-ab66269a2a06.jpeg' },
      { name: 'Mehmet Kurt, PhD', role: 'Chair, Program Committee', affiliation: 'University of Washington, USA', photo: 'https://cdn.fourwaves.com/static/media/speakercontent/e3d9db3d-b077-47e3-9529-c1d5e9b2a411/8318c9e4-feee-43ac-9e65-d56d4b8167a7.jpeg' },
      { name: 'Alessandro Crimi, PhD', role: 'Chair, Publication Committee', affiliation: 'AGH University, Krakow, Poland', photo: 'https://api.fourwaves.com/api/files/serve/aea7b109-7623-4497-b741-0917ace50e14' },
      { name: 'Tinashe Mutsvangwa, PhD', role: 'Co-Chair, Program Committee', affiliation: 'IMT-Atlantique, France', photo: 'https://cdn.fourwaves.com/static/media/speakercontent/e3d9db3d-b077-47e3-9529-c1d5e9b2a411/130e330c-b922-44ec-9e44-5e875fc5de32.jpeg' },
      { name: 'Celia Cintas, PhD', role: 'Co-Chair', affiliation: 'IBM Research Africa, Nairobi, Kenya', photo: 'https://cdn.fourwaves.com/static/media/speakercontent/e3d9db3d-b077-47e3-9529-c1d5e9b2a411/2b3130d4-c640-4d29-8d08-e2a6dd376001.jpeg' },
      { name: 'Bishesh Khanal, PhD', role: 'Co-Chair', affiliation: 'NAAMII, Kathmandu, Nepal', photo: 'https://cdn.fourwaves.com/static/media/speakercontent/e3d9db3d-b077-47e3-9529-c1d5e9b2a411/7f883ecf-be69-4544-85e5-71be57a43603.jpg' },
      { name: 'Andrea Lara, PhD', role: 'Co-Chair', affiliation: 'Universidad Galileo, Guatemala', photo: 'https://api.fourwaves.com/api/files/serve/56795c3e-b184-4eaa-a0fe-883ef28f2243' },
      { name: 'Farouk Dako, MD, MPH', role: 'Co-Chair', affiliation: 'University of Pennsylvania, USA', photo: 'https://cdn.fourwaves.com/static/media/speakercontent/e3d9db3d-b077-47e3-9529-c1d5e9b2a411/5bc938d7-5fca-4ae1-b468-20bf7300d2aa.jpeg' },
    ]
  },
  {
    title: 'Administrative Team',
    members: [
      { name: 'Xènia Puig Bosch, PhD', role: 'Admin, Sponsorship', affiliation: 'Universitat de Barcelona, Spain', photo: 'https://cdn.fourwaves.com/static/media/speakercontent/df8d35ae-b850-40f3-9695-4bd079936f12/5a8be9d0-f83b-48cf-aa8e-2a4d4e1b0209.jpg' },
      { name: 'Juhi Tulsi, MD', role: 'Admin, Communications', affiliation: 'McGill University, Montreal, Canada', photo: 'https://api.fourwaves.com/api/files/serve/d622b4e0-26f3-408f-9f0c-1785f815ad3c' },
    ]
  },
  {
    title: 'Program Committee',
    members: [
      { name: 'Mehmet Kurt, PhD', role: 'Chair', affiliation: 'University of Washington, USA', photo: 'https://cdn.fourwaves.com/static/media/speakercontent/e3d9db3d-b077-47e3-9529-c1d5e9b2a411/8318c9e4-feee-43ac-9e65-d56d4b8167a7.jpeg' },
      { name: 'Dong Zhang, MSc, PhD (Candidate)', affiliation: 'University of British Columbia, Canada', photo: 'https://cdn.fourwaves.com/static/media/speakercontent/8a47d081-0496-4dd9-a2e6-113a18b7ff61/e6dd48ec-cf7b-4054-8562-9a7144f44ca3.jpeg' },
      { name: 'Maruf Adewole, PhD', affiliation: 'Medical Artificial Intelligence Lab, Lagos, Nigeria', photo: 'https://cdn.fourwaves.com/static/media/speakercontent/8a47d081-0496-4dd9-a2e6-113a18b7ff61/255f02f0-01f8-42ff-88ac-ca16115b1ef2.jpeg' },
      { name: 'William Ogallo, PhD', affiliation: 'Google Research Africa, Nairobi, Kenya', photo: 'https://cdn.fourwaves.com/static/media/speakercontent/8a47d081-0496-4dd9-a2e6-113a18b7ff61/e393d670-31a8-4650-8f69-869bcce7f1eb.jpeg' },
      { name: 'Deogratis Mzurikawo, PhD', affiliation: 'Muhimbili University, Tanzania', photo: 'https://cdn.fourwaves.com/static/media/speakercontent/8a47d081-0496-4dd9-a2e6-113a18b7ff61/83ba8b16-70e4-416b-9cef-1d44b671af26.jpeg' },
      { name: 'Waqas Sultani, PhD', affiliation: 'Information Technology University, Pakistan', photo: 'https://cdn.fourwaves.com/static/media/speakercontent/8a47d081-0496-4dd9-a2e6-113a18b7ff61/f329b100-b2b9-4e4a-a0e6-915218d1837b.jpeg' },
      { name: 'Enzo Ferrante, PhD', affiliation: 'Universidad de Buenos Aires, Argentina', photo: 'https://cdn.fourwaves.com/static/media/speakercontent/8a47d081-0496-4dd9-a2e6-113a18b7ff61/34324c81-aae7-4783-9491-c33d5561f40c.jpeg' },
      { name: 'Pamela Guevara, PhD', affiliation: 'Universidad de Concepción, Chile', photo: 'https://cdn.fourwaves.com/static/media/speakercontent/8a47d081-0496-4dd9-a2e6-113a18b7ff61/fd8e3c95-dc80-4542-a703-304644d4985e.jpeg' },
      { name: 'Sahar Selim, PhD', affiliation: 'Nile University, Egypt', photo: 'https://api.fourwaves.com/api/files/serve/a2d5823e-4b6f-4b6e-b986-3a9f0f66d621' },
      { name: 'Long Quoc Tran, PhD', affiliation: 'VNU University of Engineering and Technology, Vietnam', photo: 'https://cdn.fourwaves.com/static/media/speakercontent/8a47d081-0496-4dd9-a2e6-113a18b7ff61/29eee17d-5097-47d8-aa37-08cc12ec4ffc.png' },
    ]
  },
  {
    title: 'Publication Committee',
    members: [
      { name: 'Alessandro Crimi, PhD', role: 'Chair', affiliation: 'AGH University, Krakow, Poland', photo: 'https://api.fourwaves.com/api/files/serve/aea7b109-7623-4497-b741-0917ace50e14' },
      { name: 'Xiaomeng Li, PhD', affiliation: 'Hong Kong University, China', photo: 'https://cdn.fourwaves.com/static/media/speakercontent/e2e3a412-946f-41f5-9cef-281f57f6c5cf/d2391b8b-b6ce-46ad-9bec-60e7eb8cf51b.png' },
      { name: 'Marawan Elbatel, PhD (Candidate)', affiliation: 'Hong Kong University, China', photo: 'https://cdn.fourwaves.com/static/media/speakercontent/e2e3a412-946f-41f5-9cef-281f57f6c5cf/c5c33036-1356-4f93-ae13-445743f5fa4b.jpeg' },
    ]
  },
  {
    title: 'Diversity & Sponsorship Committee',
    members: [
      { name: 'Natasha Lepore, PhD', role: 'Sponsorship Co-Chair', affiliation: "Children's Hospital Los Angeles, USA", photo: 'https://api.fourwaves.com/api/files/serve/f4b20f5a-4d5a-4b4c-96d6-d6e1b19e2be0' },
      { name: 'Marius George Linguraru, DPhil MA MSc', affiliation: "Children's National Hospital, Washington DC, USA", photo: 'https://cdn.fourwaves.com/static/media/speakercontent/b604c3e8-862a-42c6-afda-465021a9703d/37c0a6a6-0e0e-4a53-a90d-19881ec59991.jpeg' },
      { name: 'Charles Delahunt, PhD', affiliation: 'Global Health Labs, Seattle, USA', photo: 'https://cdn.fourwaves.com/static/media/speakercontent/b604c3e8-862a-42c6-afda-465021a9703d/027f49ea-5aa1-4e78-b7bb-fa9d26b7a32f.jpeg' },
      { name: 'Esther Puyol Anton, PhD', affiliation: 'HeartFlow, London, UK', photo: 'https://api.fourwaves.com/api/files/serve/552dde2a-ccbb-4b77-91e6-7966bea0c43e' },
    ]
  },
  {
    title: 'Next-Gen Interchange Committee',
    members: [
      { name: 'Raymond Confidence, MSc, PhD (Candidate)', role: 'Lead', affiliation: 'McGill University, Montreal, Canada', photo: 'https://cdn.fourwaves.com/static/media/speakercontent/5c8cad83-f29d-40f7-9caf-4a86dfa524da/95f70133-37bc-4a4f-80ff-efb631788b90.jpeg' },
      { name: 'Dong Zhang, MSc, PhD (Candidate)', role: 'Co-Lead', affiliation: 'University of British Columbia, Canada', photo: 'https://cdn.fourwaves.com/static/media/speakercontent/8a47d081-0496-4dd9-a2e6-113a18b7ff61/e6dd48ec-cf7b-4054-8562-9a7144f44ca3.jpeg' },
      { name: 'Abbas M Rabiu, MD MSc', affiliation: 'Aminu Kano Teaching Hospital, Nigeria', photo: 'https://api.fourwaves.com/api/files/serve/90e53f59-4178-441e-a9fb-8957b8a51338' },
      { name: 'Kelvin Murithi, MD MMed', affiliation: 'Sonar Imaging, Nairobi, Kenya', photo: 'https://cdn.fourwaves.com/static/media/speakercontent/5c8cad83-f29d-40f7-9caf-4a86dfa524da/f24f1239-c1f9-4a2e-9748-fc18d017581b.png' },
      { name: 'Mubaraq Yakubu, PhD (Candidate)', affiliation: "King's College London, UK", photo: 'https://cdn.fourwaves.com/static/media/speakercontent/5c8cad83-f29d-40f7-9caf-4a86dfa524da/29e4afc0-61cd-4f59-9da9-7de435f96b32.jpeg' },
      { name: 'Oumayma Soula, PhD (Candidate)', affiliation: 'University of Sfax, Tunisia', photo: 'https://api.fourwaves.com/api/files/serve/2120b400-6eb0-4c16-b4b7-9f89d29f1942' },
      { name: 'Mohannad Barakat, MSc (Candidate)', affiliation: 'University of Erlangen-Nuremberg, Germany', photo: 'https://api.fourwaves.com/api/files/serve/b70c5595-40f1-44f2-8fac-215a8ef4d3ba' },
      { name: 'Noha Magdy, MSc (Candidate)', affiliation: 'University of Erlangen-Nuremberg, Germany', photo: 'https://api.fourwaves.com/api/files/serve/50a13ff0-f49f-4ed0-ba8d-1a882a204c15' },
    ]
  },
  {
    title: 'Advisory Committee',
    members: [
      { name: 'Amal Saleh Nour, MD', affiliation: 'Addis Ababa University, Ethiopia', photo: 'https://api.fourwaves.com/api/files/serve/76f33426-0a84-4989-b522-791718f2abf5' },
      { name: 'Osumane Sall', affiliation: 'Universite Numerique Cheikh Hamidou Kane, Senegal', photo: SUNFLOWER },
      { name: 'Alexander Hammers, MD PhD', affiliation: "King's College London, UK", photo: 'https://cdn.fourwaves.com/static/media/speakercontent/a571ad53-1984-495c-b239-01f9a3cb1175/b33d1214-38b1-4f38-a3c0-5fe707f389a0.jpeg' },
      { name: 'Kiran Raj Pandey, MD, MS', affiliation: 'Arete Health Sciences, Kathmandu, Nepal', photo: SUNFLOWER },
    ]
  },
]
