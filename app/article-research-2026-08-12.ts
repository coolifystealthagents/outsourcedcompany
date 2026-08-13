import type { ResearchPost } from './article-research-batch';

export const philippinesOutsourcingSubprocessorAccountability: ResearchPost & { displayDate: string } = {
  slug: 'philippines-outsourcing-subprocessor-accountability',
  title: 'Subprocessor accountability in Philippines outsourcing',
  excerpt: 'A source-led method for finding the vendors, cloud services, and support layers behind an outsourced workflow before customer data reaches them.',
  updated: '2026-08-12',
  displayDate: 'August 12, 2026',
  image: '/images/operations-meeting.jpg',
  imageAlt: 'Operations team reviewing a work queue together',
  body: [
    'An outsourcing provider may perform the visible work while other organizations host records, issue support tickets, back up files, monitor devices, or supply specialist capacity. Calling all of them “the provider” hides the evidence a buyer needs. Build a service-chain record for the actual Philippines-based workflow: each organization, the service it performs, the data or system it can reach, its location, and the party that can approve or end that access.',
    'The Philippines National Privacy Commission publishes the Data Privacy Act of 2012 and its implementing rules. Those authorities make accountability, purpose, security safeguards, and agreements relevant when personal information is processed by another party. They do not decide every cross-border, sector, or contract question. A buyer should have qualified privacy counsel apply the law to the real data flow and relationship.',
    'NIST Cybersecurity Framework 2.0 puts cybersecurity supply-chain risk inside the Govern function. NIST SP 800-161 Rev. 1 provides a deeper supply-chain risk-management framework. Together, they support a practical buyer question: can the provider identify important dependencies, assign ownership, set requirements, monitor changes, and plan what happens when a dependency fails or leaves?',
    'Start with one queue rather than a company-wide questionnaire. Trace a normal record from intake to completion and deletion. Ask which identity opens it, where it is stored, which integrations copy it, who can troubleshoot it, what logs remain, and how access is removed. Verify the answers against a current architecture diagram, access list, subprocessor register, or equivalent evidence instead of accepting a broad assurance.',
    'Separate four events because each needs a different response: adding a new service provider, changing the purpose or data fields, moving processing to another location, and ending a service. Record who must notify the buyer, who reviews the change, what evidence is required, and when work must pause. The delivery worker should escalate an unrecognized tool or transfer rather than silently creating a workaround.',
    'For a first release, use named accounts, the least access needed, and a small data set. Review the service-chain record with the provider, test one access-removal path, and confirm how the queue continues if a dependency is unavailable. Expand only when the observed controls match the written scope.',
    'This research identifies governance evidence to request; it does not certify a provider, determine legal compliance, or guarantee security. Provider suitability still depends on the actual contract, systems, data, people, and tested operating behavior.',
  ],
  sources: [
    { label: 'Philippines National Privacy Commission: Data Privacy Act of 2012', href: 'https://privacy.gov.ph/data-privacy-act/' },
    { label: 'Philippines National Privacy Commission: Implementing Rules and Regulations of the Data Privacy Act', href: 'https://privacy.gov.ph/implementing-rules-regulations-data-privacy-act-2012/' },
    { label: 'NIST Cybersecurity Framework 2.0', href: 'https://www.nist.gov/publications/nist-cybersecurity-framework-csf-20' },
    { label: 'NIST SP 800-161 Rev. 1: Cybersecurity Supply Chain Risk Management Practices', href: 'https://csrc.nist.gov/pubs/sp/800/161/r1/upd1/final' },
  ],
  related: [
    { label: 'Outsourcing vendor due diligence checklist', href: '/research/philippines-outsourcing-vendor-due-diligence' },
    { label: 'Data minimization for Philippines outsourced workflows', href: '/research/philippines-outsourcing-data-minimization' },
    { label: 'Permission design for Philippines outsourcing roles', href: '/research/philippines-outsourcing-permission-design' },
  ],
  cta: 'Have a recurring queue to scope? Bring the source, examples, access needs, and review owner to the staffing intake.',
};
