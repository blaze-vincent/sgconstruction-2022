import PageBadge from "./pageBadge"

export default function BadgeSection(){

  const badgeSectionContent = [
    {
      icon: {
        src: '/generic/building.svg',
        alt: 'Generic building icon',
        title: 'Projects'
      },
      text: {
        header: "WHAT WE'VE DONE",
        body: 'See wide range of projects we have completed'
      },
      location: '/projects'
    },
    {
      icon: {
        src: '/generic/list.svg',
        alt: 'Generic list icon',
        title: 'Services'
      },
      text: {
        header: "WHAT WE DO",
        body: 'Learn more about the industries we serve and services we offer'
      },
      location: '/services'
    },
    {
      icon: {
        src: '/generic/email.svg',
        alt: 'Generic email icon',
        title: 'Contact'
      },
      text: {
        header: "WHAT CAN WE DO FOR YOU",
        body: 'Have a project in mind? Send us a note!'
      },
      location: '/contact'
    }
  ]

  return <section
    className="flex flex-col w-full md:grid md:grid-cols-3 max-w-screen-xl m-auto gap-4 items-center md:justify-items-center"
  >
    {
      badgeSectionContent.map((contentObj, index) => {
        return <PageBadge 
          key={index} 
          icon={contentObj.icon} 
          text={contentObj.text}
          location={contentObj.location}
        />
      })
    }
  </section>
}