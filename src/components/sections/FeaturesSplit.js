import React from "react";
import classNames from "classnames";
import { SectionSplitProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";

const propTypes = {
  ...SectionSplitProps.types,
};

const defaultProps = {
  ...SectionSplitProps.defaults,
};

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {
  const outerClasses = classNames(
    "features-split section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "features-split-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const splitClasses = classNames(
    "split-wrap",
    invertMobile && "invert-mobile",
    invertDesktop && "invert-desktop",
    alignTop && "align-top"
  );

  const sectionHeader = {
    title: "A growth oriented IT ecosystem",
    paragraph:
      "'The advance of technology is based on making it fit in so that you don't really even notice it, so it's part of everyday life', from us, you'll have the best services with latest tech stacks in market.",
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>
            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Corperate IT websites
                </div>
                <h3 className="mt-0 mb-12">Add Smartness to your Business</h3>
                <p className="m-0">
                  We design and develop high quality websites for any business
                  organisations. We've a best team to design and develop with
                  latest technologies, and our continous learning allows us to
                  deliver the websites that can drive the result for your
                  business needs.
                </p>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <Image
                  src={require("./../../assets/images/kapnmob3.jpg")}
                  alt="Features split 01"
                  width={528}
                  height={396}
                />
              </div>
            </div>

            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Mobile/Web Applications
                </div>
                <h3 className="mt-0 mb-12">You think it, we'll build it.</h3>
                <p className="m-0">
                  We all have great ideas in our mind. but it doesn't matter
                  unless we put some action on it. from the beginning you'll
                  need a stunning design, and someone to implement your ideas.
                  in kapreign we have a great team of engineers to design, build
                  your ideas in any platform, like Android, IOS, Web and smart
                  devices.
                </p>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <Image
                  src={require("./../../assets/images/kapnmob2.jpg")}
                  alt="Features split 01"
                  width={528}
                  height={396}
                />
              </div>
            </div>

            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Digital marketing
                </div>
                <h3 className="mt-0 mb-12">
                  Need architects for your Brand? Check this out
                </h3>
                <p className="m-0">
                  It's never late when you want to go digital. you'll have a
                  great product, people will always use it. and when the demand
                  is high, you'll also have some competitors in market. in this
                  digital world to stand out from your competitors you'll need
                  some marketing support. we'll plan and design suitable
                  strategy for your business to keep the busyness.
                </p>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <Image
                  src={require("./../../assets/images/dig-marketing.jpg")}
                  alt="Features split 01"
                  width={528}
                  height={396}
                />
              </div>
            </div>
            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Business process outsourcing
                </div>
                <h3 className="mt-0 mb-12">
                  Struggling with your business non-core functions? well, meet
                  kapreign.
                </h3>
                <p className="m-0">
                  <b>To decrease costs:</b> Outsourcing cuts down on costs for
                  in-house labor, particularly for staffing and training, and
                  for the work space to accommodate local employees.
                  <br />
                  <br />
                  <b>To concentrate on key functions:</b> Outsourcing allows
                  businesses to hone in on their main offerings instead of
                  company functions that aren’t directly tied to their core
                  processes.
                  <br />
                  <br />
                  <b>To achieve better results in noncore functions: </b>
                  Those delivering world-class capabilities for its clients may
                  need the support in noncore functionalities.
                </p>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <Image
                  src={require("./../../assets/images/bpo.webp")}
                  alt="Features split 01"
                  width={528}
                  height={396}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;
