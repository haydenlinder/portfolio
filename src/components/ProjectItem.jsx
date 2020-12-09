const ProjectItem = ({
    title = 'title',
    description = 'description',
    link = '#',
    path = ''
}) => {
    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', margin: 10}}>
            <div>{title}</div>
            <div>{description}</div>
            <br/>
            <a style={{height: 500, width: 500, overflow: 'hidden', display: 'flex'}} href={link} target='_blank'>
                <img style={{objectFit: 'cover', minWidth: '100%', minHeight: '100%'}} src={process.env.PUBLIC_URL + path} alt={title} />
            </a>
        </div>
    )
}

export default ProjectItem