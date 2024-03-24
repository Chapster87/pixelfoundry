/**
 * @typedef {import("@prismicio/client").Content.StyleGuideSlice} StyleGuideSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<StyleGuideSlice>} StyleGuideProps
 * @param {StyleGuideProps}
 */
const StyleGuide = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for style_guide (variation: {slice.variation})
      Slices
    </section>
  );
};

export default StyleGuide;
