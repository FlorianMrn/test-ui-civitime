const Colors = ({img, colors}) => {

    return (
        <article className="colors">
            <div>
            <img id="img-type" src={img} alt="type" />
          </div>
          <div>
            {colors.map((c, index) => {
                return <img key={index} src={c} alt="color" />
            })}
          </div>
        </article>
    )
};

export default Colors;