import { __ } from "@wordpress/i18n";

import {
  useBlockProps,
  RichText,
  BlockControls,
  AlignmentControl,
  InspectorControls,
} from "@wordpress/block-editor";
import { MediaUpload, MediaUploadCheck } from "@wordpress/block-editor";

import {
  PanelBody,
  ColorPicker,
  FontSizePicker,
  DatePicker,
  Button,
  RadioControl,
  ToggleControl,
  TextControl,
  BaseControl,
} from "@wordpress/components";

import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
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
// TITLE
  const onChangeTitle = (newTitle) => {
    setAttributes({ title: newTitle });
  };
// TITLE COLOR
  function onChangeTitleColor(newTitleColor) {
    setAttributes({ titleColor: newTitleColor });
  }
// CONTENT
  function onChangeContent(newContent) {
    setAttributes({ content: newContent });
  }
  // CONTENT ALIGNMENT
  function onChangeAlignment(newAlignment) {
    setAttributes({ alignment: newAlignment });
  }
  // CONTENT COLOR
  function onChangeContentColor(newColor) {
    setAttributes({ contentColor: newColor });
  }
  // CONTENT SIZE
  function onChangeContentSize(newSize) {
    if (newSize === undefined) {
      newSize = 16;
    }
    if (newSize < 12) {
      newSize = 12;
    }
    if (newSize > 26) {
      newSize = 26;
    }
    setAttributes({ contentSize: newSize });
  }
  // DATE
  function onChangeDate(newDate) {
    // Format to dd/mm/yyyy
    let formatDate = new Date(newDate);
    let dd = String(formatDate.getDate()).padStart(2, "0");
    let mm = String(formatDate.getMonth() + 1).padStart(2, "0"); //January is 0!
    let yyyy = formatDate.getFullYear();
    formatDate = mm + "/" + dd + "/" + yyyy;
    newDate = formatDate;
    setAttributes({ date: newDate });
  }
// 
  function today() {
    return new Date().toLocaleDateString();
  }
  // IMAGE INSERT
  const onSelectImage = (newImage) => {
    setAttributes({ image: newImage.sizes.full.url });
  };
// IMAGE REMOVE
  function onRemoveImage() {
    setAttributes({ image: null });
  }
  // ASPECT RATIO
  const onAspectRatioChange = (newAspectRatio) => {
    setAttributes({ aspectRatio: newAspectRatio });
  };
  // FLIP HORIZONTAL
  const onFlipHorizontalChange = (newFlipHorizontal) => {
    if (newFlipHorizontal === true) {
      newFlipHorizontal = "flip-horizontal";
    } else {
      newFlipHorizontal = "";
    }
    setAttributes({ flipHorizontal: newFlipHorizontal });
  };

  // Return the edit UI
  return (
    <div {...useBlockProps()}>
      <InspectorControls>
        {/* //Title Settings */}
        <PanelBody
          initialOpen={true}
          title={__("Title Settings", "zagaz-static")}
        >
          <ColorPicker onChange={onChangeTitleColor} value={titleColor} />
        </PanelBody>
        {/* // Content Settings */}
        <PanelBody
          initialOpen={true}
          title={__("Content Settings", "zagaz-static")}
        >
          <ColorPicker
            enableAlpha
            onChange={onChangeContentColor}
            value={contentColor}
          />
          <FontSizePicker
            fallbackFontSize={16}
            fontSizes={[
              {
                name: "Small",
                size: 12,
                slug: "small",
              },
              {
                name: "Normal",
                size: 16,
                slug: "normal",
              },
              {
                name: "Big",
                size: 26,
                slug: "big",
              },
            ]}
            onChange={onChangeContentSize}
            size="default"
            units={["px", "em", "rem"]}
            value={contentSize}
            withReset
            withSlider
            min = {12}
            max = {26}
          />
        </PanelBody>
        {/* Date Settings */}
        <PanelBody
          initialOpen={false}
          title={__("Date Settings", "zagaz-static")}
        >
          <DatePicker onChange={onChangeDate} startOfWeek={1} value={date} />
        </PanelBody>

        {/* Image Settings */}
        <PanelBody
          initialOpen={true}
          title={__("Image Settings", "zagaz-static")}
        >
          <RadioControl
            label={__("Aspect Ratio", "zagaz-static")}
            options={[
              { label: "Landscape 16:9", value: "landscape" },
              { label: "Square 1:1", value: "square" },
              { label: "Circle", value: "circle" },
              { label: "Portrait 9:16", value: "portrait" },
              { label: "Letterbox 4:3", value: "letterbox" },
              { label: "Original", value: "original" },
            ]}
            onChange={onAspectRatioChange}
            selected={aspectRatio}
          />
          <ToggleControl
            label="Flip image horizontally"
            onChange={onFlipHorizontalChange}
            checked={flipHorizontal === "flip-horizontal" ? true : ""}
          />
        </PanelBody>
      </InspectorControls>
      <BlockControls>
        <AlignmentControl value={alignment} onChange={onChangeAlignment} />
      </BlockControls>

      <div className="zagaz-backend">
        <BaseControl label="TITLE TEXT" __nextHasNoMarginBottom>
          {/* <div className="zagaz-title"> */}
          <TextControl
            style={{ color: titleColor }}
            className="zagaz-title-input"
            onChange={onChangeTitle}
            type="text"
            value={title}
            __next40pxDefaultSize
          />
          {/* </div> */}
        </BaseControl>

        <BaseControl label="SET DATE" __nextHasNoMarginBottom>
          <div className="zagaz-date">
            <div className="date-left">
              <DatePicker
                onChange={onChangeDate}
                startOfWeek={1}
                value={date}
              />
            </div>
            <div className="date-right">
              {date === "" ? <h5>Date: {today()}</h5> : <h5>Date: {date}</h5>}
            </div>
          </div>
        </BaseControl>
        <BaseControl label="CONTENT TEXT" __nextHasNoMarginBottom>
          <RichText
            {...useBlockProps({
              className: "zagaz-content",
              style: {
                color: contentColor,
                textAlign: alignment,
                fontSize: contentSize,
              },
            })}
            className="zagaz-richtext"
            tagName="p"
            placeholder={__("Enter your text here...", "zagaz-static")}
            value={content}
            onChange={onChangeContent}
          />
        </BaseControl>

        <div className="image-wrapper">
          <div className="image-top">
            <MediaUploadCheck>
              <MediaUpload
                onSelect={onSelectImage}
                allowedTypes={["image"]}
                value={image}
                render={({ open }) => (
                  <Button
                    className="upload-button"
                    variant="primary"
                    onClick={open}
                  >
                    {!image
                      ? __("Upload Image", "zagaz-static")
                      : __("Change Image", "zagaz-static")}
                  </Button>
                )}
              />

              {image && (
                <Button
                  onClick={onRemoveImage}
                  variant="secondary"
                  isDestructive
                >
                  {__("Remove Image", "zagaz-static")}
                </Button>
              )}
            </MediaUploadCheck>
          </div>
          {image && (
            <div className="image-down">
              <div className={`image-display ${flipHorizontal} }`}>
                <img
                  src={image}
                  alt={content}
                  className={`image ${aspectRatio}`}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
