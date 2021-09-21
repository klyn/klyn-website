import React from 'react';
import { Link } from 'react-router-dom';

import ContentBlock from '../../components/ContentBlock';
import "../../assets/styles/pages/NeverForgottenPage.css";

import IMG_3293 from '../../assets/project-photos/never-forgotten/IMG_3293.jpg';
import IMG_3293_LOW from '../../assets/project-photos/never-forgotten/IMG_3293-low.jpg';
import IMG_3247 from '../../assets/project-photos/never-forgotten/IMG_3247.jpg';
import IMG_3247_LOW from '../../assets/project-photos/never-forgotten/IMG_3247-low.jpg';
import IMG_3319 from '../../assets/project-photos/never-forgotten/IMG_3319.jpg';
import IMG_3319_LOW from '../../assets/project-photos/never-forgotten/IMG_3319-low.jpg';
import IMG_3251 from '../../assets/project-photos/never-forgotten/IMG_3251.jpg';
import IMG_3251_LOW from '../../assets/project-photos/never-forgotten/IMG_3251-low.jpg';
import IMG_3252 from '../../assets/project-photos/never-forgotten/IMG_3252.jpg';
import IMG_3252_LOW from '../../assets/project-photos/never-forgotten/IMG_3252-low.jpg';
import IMG_3335 from '../../assets/project-photos/never-forgotten/IMG_3335.jpg';
import IMG_3335_LOW from '../../assets/project-photos/never-forgotten/IMG_3335-low.jpg';
import IMG_3331 from '../../assets/project-photos/never-forgotten/IMG_3331.jpg';
import IMG_3331_LOW from '../../assets/project-photos/never-forgotten/IMG_3331-low.jpg';
import IMG_3297 from '../../assets/project-photos/never-forgotten/IMG_3297.jpg';
import IMG_3297_LOW from '../../assets/project-photos/never-forgotten/IMG_3297-low.jpg';
import IMG_3217 from '../../assets/project-photos/never-forgotten/IMG_3217.jpg';
import IMG_3217_LOW from '../../assets/project-photos/never-forgotten/IMG_3217-low.jpg';
import IMG_3327_2 from '../../assets/project-photos/never-forgotten/IMG_3327-2.jpg';
import IMG_3327_2_LOW from '../../assets/project-photos/never-forgotten/IMG_3327-2-low.jpg';
import IMG_3176 from '../../assets/project-photos/never-forgotten/IMG_3176.jpg';
import IMG_3176_LOW from '../../assets/project-photos/never-forgotten/IMG_3176-low.jpg';
import IMG_3326_2 from '../../assets/project-photos/never-forgotten/IMG_3326-2.jpg';
import IMG_3326_2_LOW from '../../assets/project-photos/never-forgotten/IMG_3326-2-low.jpg';
import ORIGINAL_DRAWING from '../../assets/project-photos/never-forgotten/original-drawing.png';
import ORIGINAL_DRAWING_LOW from '../../assets/project-photos/never-forgotten/original-drawing-low.jpg';
import ALTERNATIVE_CONSTRUCTION from '../../assets/project-photos/never-forgotten/alternative-construction.png';
import ALTERNATIVE_CONSTRUCTION_LOW from '../../assets/project-photos/never-forgotten/alternative-construction-low.jpg';
import TOP_WING_RIB from '../../assets/project-photos/never-forgotten/top-wing-rib.png';
import TOP_WING_RIB_LOW from '../../assets/project-photos/never-forgotten/top-wing-rib-low.jpg';
import PIC_20210724_165325 from '../../assets/project-photos/never-forgotten/20210724_165325.jpg';
import PIC_20210724_165325_LOW from '../../assets/project-photos/never-forgotten/20210724_165325-low.jpg';
import PIC_20210806_132239 from '../../assets/project-photos/never-forgotten/20210806_132239.jpg';
import PIC_20210806_132239_LOW from '../../assets/project-photos/never-forgotten/20210806_132239-low.jpg';
import PIC_20210808_170647 from '../../assets/project-photos/never-forgotten/20210808_170647.jpg';
import PIC_20210808_170647_LOW from '../../assets/project-photos/never-forgotten/20210808_170647-low.jpg';
import PIC_20210809_145329 from '../../assets/project-photos/never-forgotten/20210809_145329.jpg';
import PIC_20210809_145329_LOW from '../../assets/project-photos/never-forgotten/20210809_145329-low.jpg';
import PIC_20210809_145339 from '../../assets/project-photos/never-forgotten/20210809_145339.jpg';
import PIC_20210809_145339_LOW from '../../assets/project-photos/never-forgotten/20210809_145339-low.jpg';
import PIC_20210809_152731 from '../../assets/project-photos/never-forgotten/20210809_152731.jpg';
import PIC_20210809_152731_LOW from '../../assets/project-photos/never-forgotten/20210809_152731-low.jpg';
import PIC_20210809_182729 from '../../assets/project-photos/never-forgotten/20210809_182729.jpg';
import PIC_20210809_182729_LOW from '../../assets/project-photos/never-forgotten/20210809_182729-low.jpg';
import PIC_20210810_121427 from '../../assets/project-photos/never-forgotten/20210810_121427.jpg';
import PIC_20210810_121427_LOW from '../../assets/project-photos/never-forgotten/20210810_121427-low.jpg';
import PIC_20210811_113044 from '../../assets/project-photos/never-forgotten/20210811_113044.jpg';
import PIC_20210811_113044_LOW from '../../assets/project-photos/never-forgotten/20210811_113044-low.jpg';
import PIC_20210812_131129 from '../../assets/project-photos/never-forgotten/20210812_131129.jpg';
import PIC_20210812_131129_LOW from '../../assets/project-photos/never-forgotten/20210812_131129-low.jpg';
import PIC_20210812_131139 from '../../assets/project-photos/never-forgotten/20210812_131139.jpg';
import PIC_20210812_131139_LOW from '../../assets/project-photos/never-forgotten/20210812_131139-low.jpg';
import PIC_20210812_163014 from '../../assets/project-photos/never-forgotten/20210812_163014.jpg';
import PIC_20210812_163014_LOW from '../../assets/project-photos/never-forgotten/20210812_163014-low.jpg';
import PIC_20210812_163021 from '../../assets/project-photos/never-forgotten/20210812_163021.jpg';
import PIC_20210812_163021_LOW from '../../assets/project-photos/never-forgotten/20210812_163021-low.jpg';
import PIC_20210817_125702 from '../../assets/project-photos/never-forgotten/20210817_125702.jpg';
import PIC_20210817_125702_LOW from '../../assets/project-photos/never-forgotten/20210817_125702-low.jpg';
import PIC_20210821_171508 from '../../assets/project-photos/never-forgotten/20210821_171508.jpg';
import PIC_20210821_171508_LOW from '../../assets/project-photos/never-forgotten/20210821_171508-low.jpg';
import PIC_20210821_171511 from '../../assets/project-photos/never-forgotten/20210821_171511.jpg';
import PIC_20210821_171511_LOW from '../../assets/project-photos/never-forgotten/20210821_171511-low.jpg';
import PIC_20210821_171516 from '../../assets/project-photos/never-forgotten/20210821_171516.jpg';
import PIC_20210821_171516_LOW from '../../assets/project-photos/never-forgotten/20210821_171516-low.jpg';
import PIC_20210822_125241 from '../../assets/project-photos/never-forgotten/20210822_125241.jpg';
import PIC_20210822_125241_LOW from '../../assets/project-photos/never-forgotten/20210822_125241-low.jpg';
import PIC_20210822_151948 from '../../assets/project-photos/never-forgotten/20210822_151948.jpg';
import PIC_20210822_151948_LOW from '../../assets/project-photos/never-forgotten/20210822_151948-low.jpg';
import PIC_20210823_183702 from '../../assets/project-photos/never-forgotten/20210823_183702.jpg';
import PIC_20210823_183702_LOW from '../../assets/project-photos/never-forgotten/20210823_183702-low.jpg';
import PIC_20210824_153001 from '../../assets/project-photos/never-forgotten/20210824_153001.jpg';
import PIC_20210824_153001_LOW from '../../assets/project-photos/never-forgotten/20210824_153001-low.jpg';
import PIC_20210824_153007 from '../../assets/project-photos/never-forgotten/20210824_153007.jpg';
import PIC_20210824_153007_LOW from '../../assets/project-photos/never-forgotten/20210824_153007-low.jpg';
import PIC_20210831_151226 from '../../assets/project-photos/never-forgotten/20210831_151226.jpg';
import PIC_20210831_151226_LOW from '../../assets/project-photos/never-forgotten/20210831_151226-low.jpg';
import PIC_20210905_134327 from '../../assets/project-photos/never-forgotten/20210905_134327.jpg';
import PIC_20210905_134327_LOW from '../../assets/project-photos/never-forgotten/20210905_134327-low.jpg';
import PIC_20210906_130107 from '../../assets/project-photos/never-forgotten/20210906_130107.jpg';
import PIC_20210906_130107_LOW from '../../assets/project-photos/never-forgotten/20210906_130107-low.jpg';
import PIC_20210912_183706 from '../../assets/project-photos/never-forgotten/20210912_183706.jpg';
import PIC_20210912_183706_LOW from '../../assets/project-photos/never-forgotten/20210912_183706-low.jpg';
import PIC_20210912_190359 from '../../assets/project-photos/never-forgotten/20210912_190359.jpg';
import PIC_20210912_190359_LOW from '../../assets/project-photos/never-forgotten/20210912_190359-low.jpg';
import PIC_20210912_190445 from '../../assets/project-photos/never-forgotten/20210912_190445.jpg';
import PIC_20210912_190445_LOW from '../../assets/project-photos/never-forgotten/20210912_190445-low.jpg';
import PIC_20210913_162725 from '../../assets/project-photos/never-forgotten/20210913_162725.jpg';
import PIC_20210913_162725_LOW from '../../assets/project-photos/never-forgotten/20210913_162725-low.jpg';

let NeverForgottenPage = () => (
  <div>
    <ContentBlock theme='light'>
      <div className="page-heading">
        <span className="page-heading-title">
          Never Forgotten
        </span>
        <span className="page-heading-subtitle">
          A desk, a journey and a beginning
        </span>
      </div>

      <a href={IMG_3293} target="_blank">
        <div className="full-width-photo" style={{
          backgroundImage: `url(${IMG_3293_LOW})`,
        }}/>
      </a>

      <div className="page-abstract">
        <p>
          The Never Forgotten is a desk inspired by aviation. The side-profile somewhat loosely replicates the side-profile of a biplane; However, it deliberately doesn’t copy the exact elements, forms or the construction methods of an airworthy aeroplane.        </p>
        <p>
          The design is a tribute to the brave people who not only made flying and aviation possible, safer and more accessible for all of us, but also protected our lives and future at the cost of sacrificing their own.
        </p>
        <p>
          The name of the desk, Never Forgotten, comes from the <a href="https://www.mzv.cz/london/en/culture_and_education/project_never_forgotten/index.html" target="_blank">Project ‘Never Forgotten’</a> which was conducted by the Embassy of the Czech Republic in London, which in itself was a tribute to the Czechoslovak soldiers who perished in the United Kingdom during World War II while performing their service.
        </p>
      </div>

      <div className="highlight">
        <b>Tip:</b> Tap or click on the photos for higher quality versions. Photos will open in a new browser tab.
      </div>

      <a href={IMG_3247} target="_blank">
        <div className="half-width-photo align-right" style={{
          backgroundImage: `url(${IMG_3247_LOW})`,
        }}/>
      </a>
      <p>
        The design, although a decade-long desire, is the result of 2.5 years of many attempts followed by 3.5 months of work to realise the concept. The built process is mostly handmade and only a handful of powertools were used in some non-crucial steps of the build process.
      </p>
      <p>
        There are two species of wood used in this project: Hard Maple and Cherry. The finish is boiled linseed oil; However, the original plan was to use boiled linseed oil on Cherry parts and apply Walnut oil to Maple parts to avoid discolouration of the Maple as much as possible.
      </p>
      <p>
        The desk presented in the photos is a prototype, thus, not as complex as the original drawing. Beside the somewhat unusual joinery, the stability of the desk was also a question as the leg struts are leaned forward by about five degrees. The aerofoil shape of the struts was also something to experiment with, hence, deciding to make this built a simpler version of the original drawing, in case the prototype version didn’t meet the expectations and required starting from scratch.
      </p>
    </ContentBlock>

    <ContentBlock theme="dark">
      <a href={TOP_WING_RIB} target="_blank">
        <div className="full-width-photo" style={{
          backgroundImage: `url(${TOP_WING_RIB_LOW})`,
        }}/>
      </a>
      <div className="quote">
        <p>
          I hope I will be able to make each individual desk even more unique and special. The wing ribs on top are one of those places where I can express ideas more freely, however, almost every component of the desk can be made differently to help delivering the message.
        </p>
        <p>
          This particular design didn’t make it to the prototype as I was trying to keep the build simple and true to the spirit of prototyping.
        </p>
      </div>     
    </ContentBlock>

    <ContentBlock>
      <a href={ORIGINAL_DRAWING} target="_blank">
        <div className="half-width-photo align-right" style={{
          backgroundImage: `url(${ORIGINAL_DRAWING_LOW})`,
        }}/>
      </a>
      <p>
        The original design of the desk has a narrower base and slightly slimmer wing ribs. It is also leaned more forward than the prototype presented in the photos. Although the design looks reasonably good on paper, the main question from the beginning was if the final product will also look good in real life.
      </p>
      <p>
        There was no temptation for creating a 3D model before initiating the build as it was clear a lot of things had to be worked out in real life to make this a successful prototype; However, spending more time detailing the joinery beforehand would have been very useful.
      </p>
      <a href={ALTERNATIVE_CONSTRUCTION} target="_blank">
        <div className="half-width-photo align-left" style={{
          backgroundImage: `url(${ALTERNATIVE_CONSTRUCTION_LOW})`,
        }}/>
      </a>
      <p>
        The plan for the leg struts was to make them out of a single piece of solid wood -- as seen in the prototype; However, there were other options where the struts would be made as shorter straight pieces and another piece would be made with all the curves and joinery to attach the straight struts to the wing ribs.
      </p>
      <p>
        This would have made some parts simpler to built, but the overal complexity would have increased. That said, hopefully one day this variation of the design would also see the daylight.
      </p>
      <p>
        Another important question was regarding the design of the top wing ribs. Making an exact copy of a real-world wooden wing rib is quite tempting and of course brings joy to anyone who loves building aeroplanes; However, there wasn’t much design or creativity involved in copying an existing element. That being said, there will certainly be a variation of the desk built with realistic wing rib structures without a doubt.
      </p>
      <p>
        The wing rib you see in the original drawing of the desk is perhaps more inspired by the construction of a bridge rather than an aeroplanes wing rib. The idea behind this specific variation was to honor the people who weren’t necessarily pilots e.g. scientists, engineers and mechanics, who were equaliy important in the advancement of aviation.
      </p>
      <br />
      <div className="highlight">
        <b>Please note:</b> The content of this page is still under active development. Please come back in a couple of weeks for the rest of the story and more photos.
      </div>
    </ContentBlock>

    <ContentBlock>
      <p>
        <b>Pre-photoshoot:</b>
      </p>
      <div className="photo-gallery">
        <a href={IMG_3293} target="_blank">
          <div className="photo-gallery-item" style={{
            backgroundImage: `url(${IMG_3293_LOW})`,
          }}/>
        </a>

        <a href={IMG_3247} target="_blank">
          <div className="photo-gallery-item" style={{
            backgroundImage: `url(${IMG_3247_LOW})`,
          }}/>
        </a>

        <a href={IMG_3251} target="_blank">
          <div className="photo-gallery-item" style={{
            backgroundImage: `url(${IMG_3251_LOW})`,
          }}/>
        </a>

        <a href={IMG_3252} target="_blank">
          <div className="photo-gallery-item" style={{
            backgroundImage: `url(${IMG_3252_LOW})`,
          }}/>
        </a>

        <a href={IMG_3335} target="_blank">
          <div className="photo-gallery-item" style={{
            backgroundImage: `url(${IMG_3335_LOW})`,
          }}/>
        </a>

        <a href={IMG_3331} target="_blank">
          <div className="photo-gallery-item" style={{
            backgroundImage: `url(${IMG_3331_LOW})`,
          }}/>
        </a>

        <a href={IMG_3176} target="_blank">
          <div className="photo-gallery-item" style={{
            backgroundImage: `url(${IMG_3176_LOW})`,
          }}/>
        </a>

        <a href={IMG_3319} target="_blank">
          <div className="photo-gallery-item" style={{
            backgroundImage: `url(${IMG_3319_LOW})`,
          }}/>
        </a>

        <a href={IMG_3297} target="_blank">
          <div className="photo-gallery-item" style={{
            backgroundImage: `url(${IMG_3297_LOW})`,
          }}/>
        </a>

        <a href={IMG_3217} target="_blank">
          <div className="photo-gallery-item" style={{
            backgroundImage: `url(${IMG_3217_LOW})`,
          }}/>
        </a>

        <a href={IMG_3326_2} target="_blank">
          <div className="photo-gallery-item" style={{
            backgroundImage: `url(${IMG_3326_2_LOW})`,
          }}/>
        </a>

        <a href={IMG_3327_2} target="_blank">
          <div className="photo-gallery-item" style={{
            backgroundImage: `url(${IMG_3327_2_LOW})`,
          }}/>
        </a>

        <a href={ORIGINAL_DRAWING} target="_blank">
          <div className="photo-gallery-item" style={{
            backgroundImage: `url(${ORIGINAL_DRAWING_LOW})`,
          }}/>
        </a>


        <a href={ALTERNATIVE_CONSTRUCTION} target="_blank">
          <div className="photo-gallery-item" style={{
            backgroundImage: `url(${ALTERNATIVE_CONSTRUCTION_LOW})`,
          }}/>
        </a>


        <a href={TOP_WING_RIB} target="_blank">
          <div className="photo-gallery-item" style={{
            backgroundImage: `url(${TOP_WING_RIB_LOW})`,
          }}/>
        </a>

      </div>
    </ContentBlock>

    <ContentBlock>
      <p>
        <b>Build process:</b>
      </p>
      <div className="photo-gallery">
        <a href={PIC_20210724_165325} target="_blank">
          <div className="photo-gallery-item" style={{
            backgroundImage: `url(${PIC_20210724_165325_LOW})`,
          }}/>
        </a>

        <a href={PIC_20210806_132239} target="_blank">
          <div className="photo-gallery-item" style={{
            backgroundImage: `url(${PIC_20210806_132239_LOW})`,
          }}/>
        </a>

        <a href={PIC_20210808_170647} target="_blank">
          <div className="photo-gallery-item" style={{
            backgroundImage: `url(${PIC_20210808_170647_LOW})`,
          }}/>
        </a>

        <a href={PIC_20210809_145329} target="_blank">
          <div className="photo-gallery-item" style={{
            backgroundImage: `url(${PIC_20210809_145329_LOW})`,
          }}/>
        </a>

        <a href={PIC_20210809_145339} target="_blank">
          <div className="photo-gallery-item" style={{
            backgroundImage: `url(${PIC_20210809_145339_LOW})`,
          }}/>
        </a>

        <a href={PIC_20210809_152731} target="_blank">
          <div className="photo-gallery-item" style={{
            backgroundImage: `url(${PIC_20210809_152731_LOW})`,
          }}/>
        </a>

        <a href={PIC_20210809_182729} target="_blank">
          <div className="photo-gallery-item" style={{
            backgroundImage: `url(${PIC_20210809_182729_LOW})`,
          }}/>
        </a>

        <a href={PIC_20210810_121427} target="_blank">
          <div className="photo-gallery-item" style={{
            backgroundImage: `url(${PIC_20210810_121427_LOW})`,
          }}/>
        </a>

        <a href={PIC_20210811_113044} target="_blank">
          <div className="photo-gallery-item" style={{
            backgroundImage: `url(${PIC_20210811_113044_LOW})`,
          }}/>
        </a>

        <a href={PIC_20210812_131129} target="_blank">
          <div className="photo-gallery-item" style={{
            backgroundImage: `url(${PIC_20210812_131129_LOW})`,
          }}/>
        </a>

        <a href={PIC_20210812_131139} target="_blank">
          <div className="photo-gallery-item" style={{
            backgroundImage: `url(${PIC_20210812_131139_LOW})`,
          }}/>
        </a>

        <a href={PIC_20210812_163014} target="_blank">
          <div className="photo-gallery-item" style={{
            backgroundImage: `url(${PIC_20210812_163014_LOW})`,
          }}/>
        </a>

        <a href={PIC_20210812_163021} target="_blank">
          <div className="photo-gallery-item" style={{
            backgroundImage: `url(${PIC_20210812_163021_LOW})`,
          }}/>
        </a>

        <a href={PIC_20210817_125702} target="_blank">
          <div className="photo-gallery-item" style={{
            backgroundImage: `url(${PIC_20210817_125702_LOW})`,
          }}/>
        </a>

        <a href={PIC_20210821_171508} target="_blank">
          <div className="photo-gallery-item" style={{
            backgroundImage: `url(${PIC_20210821_171508_LOW})`,
          }}/>
        </a>

        <a href={PIC_20210821_171511} target="_blank">
          <div className="photo-gallery-item" style={{
            backgroundImage: `url(${PIC_20210821_171511_LOW})`,
          }}/>
        </a>

        <a href={PIC_20210821_171516} target="_blank">
          <div className="photo-gallery-item" style={{
            backgroundImage: `url(${PIC_20210821_171516_LOW})`,
          }}/>
        </a>

        <a href={PIC_20210822_125241} target="_blank">
          <div className="photo-gallery-item" style={{
            backgroundImage: `url(${PIC_20210822_125241_LOW})`,
          }}/>
        </a>

        <a href={PIC_20210822_151948} target="_blank">
          <div className="photo-gallery-item" style={{
            backgroundImage: `url(${PIC_20210822_151948_LOW})`,
          }}/>
        </a>

        <a href={PIC_20210823_183702} target="_blank">
          <div className="photo-gallery-item" style={{
            backgroundImage: `url(${PIC_20210823_183702_LOW})`,
          }}/>
        </a>

        <a href={PIC_20210824_153001} target="_blank">
          <div className="photo-gallery-item" style={{
            backgroundImage: `url(${PIC_20210824_153001_LOW})`,
          }}/>
        </a>

        <a href={PIC_20210824_153007} target="_blank">
          <div className="photo-gallery-item" style={{
            backgroundImage: `url(${PIC_20210824_153007_LOW})`,
          }}/>
        </a>

        <a href={PIC_20210831_151226} target="_blank">
          <div className="photo-gallery-item" style={{
            backgroundImage: `url(${PIC_20210831_151226_LOW})`,
          }}/>
        </a>

        <a href={PIC_20210905_134327} target="_blank">
          <div className="photo-gallery-item" style={{
            backgroundImage: `url(${PIC_20210905_134327_LOW})`,
          }}/>
        </a>

        <a href={PIC_20210906_130107} target="_blank">
          <div className="photo-gallery-item" style={{
            backgroundImage: `url(${PIC_20210906_130107_LOW})`,
          }}/>
        </a>

        <a href={PIC_20210912_183706} target="_blank">
          <div className="photo-gallery-item" style={{
            backgroundImage: `url(${PIC_20210912_183706_LOW})`,
          }}/>
        </a>

        <a href={PIC_20210912_190359} target="_blank">
          <div className="photo-gallery-item" style={{
            backgroundImage: `url(${PIC_20210912_190359_LOW})`,
          }}/>
        </a>

        <a href={PIC_20210912_190445} target="_blank">
          <div className="photo-gallery-item" style={{
            backgroundImage: `url(${PIC_20210912_190445_LOW})`,
          }}/>
        </a>

        <a href={PIC_20210913_162725} target="_blank">
          <div className="photo-gallery-item" style={{
            backgroundImage: `url(${PIC_20210913_162725_LOW})`,
          }}/>
        </a>

      </div>
    </ContentBlock>

  </div>
);

export default NeverForgottenPage;
