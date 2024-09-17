import siteMetadata from '@/data/siteMetadata'
import ContactLink from '@/components/ContactLink'
import { PageSEO } from '@/components/SEO'

const Contact = () => {
  return (
    <>
      <PageSEO title={`Contact - ${siteMetadata.author}`} description="All my contacts" />
      <div className="mx-auto max-w-3xl overflow-hidden">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
          Current Emails
        </h1>
        <div className="pt-10 pb-8">
          <ul className="font-semi-bold flex flex-col space-y-4">
            <ContactLink href="mailto:hello@zhoubrian.com" title="zhoubrian.com" icon="hello" />
            This email is the best way to reach me - feel free to reach out!
            <ContactLink
              href="mailto:brianzhou@college.harvard.edu"
              title="college.harvard.edu"
              icon="brianzhou"
            />
            For any correspondence relating to my studies at the College.
            <ContactLink
              href="mailto:brianzhou@dartmouth.edu"
              title="dartmouth.edu"
              icon="brianzhou"
            />
            For any correspondence relating to my work at Dartmouth Hitchcock.
            <ContactLink
              href="mailto:brian@thespringgroup.org"
              title="thespringgroup.org"
              icon="brian"
            />
            For any correspondence relating to The SPRING Group.
            <ContactLink href="mailto:brian@eabsentee.org" title="eabsentee.org" icon="brian" />
            For any correspondence relating to eAbsentee.
          </ul>
        </div>
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
          Socials
        </h1>
        <div className="pt-10 pb-8">
          <ul className="font-semi-bold flex flex-col space-y-4">
            <ContactLink href="https://github.com/brianlzhou" title="github" icon="brianlzhou" />
            <ContactLink
              href="https://www.linkedin.com/in/brianlzhou"
              title="linkedin"
              icon="brianlzhou"
            />
            <ContactLink href="https://twitter.com/brian1zhou" title="twitter" icon="brian1zhou" />
            <ContactLink
              href="https://en.unesco.org/inclusivepolicylab/users/brian-zhou"
              title="unesco"
              icon="brian-zhou"
            />
          </ul>
        </div>
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
          In a past life...
        </h1>
        <div className="pt-10 pb-8">
          <ul className="font-semi-bold flex flex-col space-y-4">
            <ContactLink href="mailto:2024bzhou@tjhsst.edu" title="tjhsst.edu" icon="2024bzhou" />
            Previously for when I was a student at TJHSST. Forwarding is enabled, but use an active
            email.
            <ContactLink
              href="mailto:brian.zhou.ctr@nrl.navy.mil"
              title="nrl.navy.mil"
              icon="brian.zhou.ctr"
            />
            Previously for when I worked at the U.S. Naval Research Laboratory. Forwarding is not
            enabled.
            {/* <ContactLink
              href="mailto:2024bzhou@tjhsst.edu"
              title="tjhsst.edu"
              icon="2024bzhou"
            /> */}
          </ul>
        </div>
      </div>
    </>
  )
}

export default Contact
