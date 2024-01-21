const SocialButton = ({icon, link}) =>{
    return(
        <>
        <a href={link} target="_blank">
            <div className="icon-container border border-black bg-light rounded-circle py-2 px-3 ">
            <i className={icon}></i>
        </div>
        </a>
        </>

    );
};
export default SocialButton;