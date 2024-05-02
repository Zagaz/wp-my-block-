import { useBlockProps, RichText } from "@wordpress/block-editor";

export default function save({ attributes }) {
  const {
    title,
    titleColor,
    content,
    alignment,
    contentColor,
    contentSize,
    date,
    image,
    aspectRatio,
    flipHorizontal,
  } = attributes;

  return (
    <>
      <div {...useBlockProps.save()}>
        <div className="zagaz-frontend">
          <div className="wrapper">
            {
              image && (
                <div className="image-wrapper">
                  <img
                    src={image}
                    alt={title}
                    className={`the-image ${aspectRatio} ${flipHorizontal}`}
                  />
                </div>
              )
                
            }


            {/* <div className="image-wrapper">
              <img
                src={image}
                alt={title}
                className={`the-image ${aspectRatio} ${flipHorizontal}`}
              />
            </div> */}




            <div className="text-wrapper">
              {title && (
                <h3
                  style={{
                    color: titleColor,
                  }}
                >
                  {title}
                </h3>
              )}

              {content && (
                <RichText.Content
                  tagName="p"
                  value={content}
                  style={{
                    color: contentColor,
                    fontSize: contentSize,
                    textAlign: alignment,
                  }}
                />
              )}

              <div className="date">{date}</div>
            </div>
          </div>
        </div>
      </div>

      
    </>
  );
}
