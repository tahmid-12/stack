interface Props {
    name: String;
    image?: any;
}

const Button = ({ name, image }: Props) => {
    return (
        <div className="w-[240px] h-[58px] hidden md:flex justify-center items-center gap-x-1 border-[1px] border-lightText/50 rounded-[16px] bg-buttonColor group">
            {image}
            <button className="text-blurColor font-sans">{name}</button>
        </div>
    )
}

export default Button