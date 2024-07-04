// import BodyFlex from "../components/skillCards/BodyFlex";
// import StepAerobics from "../components/skillCards/StepAerobics";
// import Stretching from "../../components/skillCards/Stretching";
import Yoga from "../../components/skillCards/Yoga";
// import Zumba from "../components/skillCards/Zumba";

export default function ChosenCoursePage() {
  return (
    <div>
      <div className="flex flex-col font-roboto bg-gray-100 center">
        <Yoga />
        {/* <Stretching /> */}
        {/* <Zumba /> */}
        {/* <StepAerobics /> */}
        {/* <BodyFlex /> */}

        <div className="mt-10 lg:mt-15 flex flex-col ">
          <p className="text-black text-2xl lg:text-4xl font-medium lg:font-semibold leading-6-1 lg:leading-11">
            Подойдёт для вас, если:
          </p>
          <div className="mt-6 lg:mt-10 gap-17 flex flex-row justify-between  flex-wrap">
            <div className="w-82 lg:w-84 h-35 p-5  flex flex-row justify-between rounded-lg bg-gradient-to-r from-custom-black1 to-custom-black2">
              <div className="text-custom-green text-7.2xl font-medium leading-26 flex flex-row items-center">
                1
              </div>
              <div className="pl-5 text-white text-lg lg:text-2xl font-normal leading-5 lg:leading-6-1 text-start flex items-center">
                Давно хотели попробовать йогу, но не решались начать
              </div>
            </div>

            <div className="w-82 lg:w-88 h-35 p-5 flex flex-row justify-between rounded-lg bg-gradient-to-r from-custom-black1 to-custom-black2">
              <div className="text-custom-green text-7.2xl font-medium leading-26 flex flex-row items-center">
                2
              </div>
              <div className="pl-5 text-white text-lg lg:text-2xl font-normal leading-5 lg:leading-6-1 text-start flex items-center">
                Хотите укрепить позвоночник, избавиться от болей в спине и
                суставах
              </div>
            </div>

            <div className="w-82 lg:w-84 h-35 p-5 flex flex-row justify-between rounded-lg bg-gradient-to-r from-custom-black1 to-custom-black2">
              <div className="text-custom-green text-7.2xl font-medium leading-26 flex flex-row items-center">
                3
              </div>
              <div className="pl-5 text-white text-lg lg:text-2xl font-normal leading-5 lg:leading-6-1 text-start flex items-center">
                Ищете активность, полезную для тела и души
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 lg:mt-15 flex flex-col ">
          <p className="text-black text-2xl lg:text-4xl font-medium lg:font-semibold leading-6-1 lg:leading-11">
            Направления
          </p>
          <div className="laptop mt-6 lg:mt-10 p-8-2 flex flex-row justify-around gap-31 bg-custom-green text-black-400 rounded-lg">
            <div className="flex flex-col gap-8-1">
              <div className="flex flex-row">
                <div className="h-7-2 w-7-2">
                  <svg className="h-7-2 w-7-2">
                    <use xlinkHref="/images/icons/sprite.svg#icon-sparcle" />
                  </svg>
                </div>
                <div className="text-2xl font-normal leading-6-1">
                  Йога для новичков
                </div>
              </div>

              <div className="flex flex-row">
                <div className="h-7-2 w-7-2">
                  <svg className="h-7-2 w-7-2">
                    <use xlinkHref="/images/icons/sprite.svg#icon-sparcle" />
                  </svg>
                </div>
                <div className="text-2xl font-normal leading-6-1">
                  Классическая йога
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-8-1">
              <div className="flex flex-row">
                <div className="h-7-2 w-7-2">
                  <svg className="h-7-2 w-7-2">
                    <use xlinkHref="/images/icons/sprite.svg#icon-sparcle" />
                  </svg>
                </div>
                <div className="text-2xl font-normal leading-6-1">
                  Кундалини-йога
                </div>
              </div>
              <div className="flex flex-row">
                <div className="h-7-2 w-7-2">
                  <svg className="h-7-2 w-7-2">
                    <use xlinkHref="/images/icons/sprite.svg#icon-sparcle" />
                  </svg>
                </div>
                <div className="text-2xl font-normal leading-6-1">
                  Йогатерапия
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-8-1">
              <div className="flex flex-row">
                <div className="h-7-2 w-7-2">
                  <svg className="h-7-2 w-7-2">
                    <use xlinkHref="/images/icons/sprite.svg#icon-sparcle" />
                  </svg>
                </div>
                <div className="text-2xl font-normal leading-6-1">
                  Хатха-йога
                </div>
              </div>
              <div className="flex flex-row">
                <div className="h-7-2 w-7-2">
                  <svg className="h-7-2 w-7-2">
                    <use xlinkHref="/images/icons/sprite.svg#icon-sparcle" />
                  </svg>
                </div>
                <div className="text-2xl font-normal leading-6-1">
                  Аштанга-йога
                </div>
              </div>
            </div>
          </div>

          <div className="mobile center mt-6 lg:mt-10 p-8-2 flex flex-col gap-8-05 bg-custom-green text-black-400 rounded-lg">
            <div className="flex flex-col gap-8-05">
              <div className="flex flex-row">
                <div>
                  <svg className="h-7-2 w-7-2">
                    <use xlinkHref="/images/icons/sprite.svg#icon-sparcle" />
                  </svg>
                </div>
                <div className="text-lg font-normal leading-5">
                  Йога для новичков
                </div>
              </div>

              <div className="flex flex-row">
                <div className="h-7-2 w-7-2">
                  <svg className="h-7-2 w-7-2">
                    <use xlinkHref="/images/icons/sprite.svg#icon-sparcle" />
                  </svg>
                </div>
                <div className="text-lg font-normal leading-5">
                  Классическая йога
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-8-1">
              <div className="flex flex-row">
                <div className="h-7-2 w-7-2">
                  <svg className="h-7-2 w-7-2">
                    <use xlinkHref="/images/icons/sprite.svg#icon-sparcle" />
                  </svg>
                </div>
                <div className="text-lg font-normal leading-5">
                  Кундалини-йога
                </div>
              </div>
              <div className="flex flex-row">
                <div className="h-7-2 w-7-2">
                  <svg className="h-7-2 w-7-2">
                    <use xlinkHref="/images/icons/sprite.svg#icon-sparcle" />
                  </svg>
                </div>
                <div className="text-lg font-normal leading-5">Йогатерапия</div>
              </div>
            </div>

            <div className="flex flex-col gap-8-1">
              <div className="flex flex-row">
                <div className="h-7-2 w-7-2">
                  <svg className="h-7-2 w-7-2">
                    <use xlinkHref="/images/icons/sprite.svg#icon-sparcle" />
                  </svg>
                </div>
                <div className="text-lg font-normal leading-5">Хатха-йога</div>
              </div>
              <div className="flex flex-row">
                <div className="h-7-2 w-7-2">
                  <svg className="h-7-2 w-7-2">
                    <use xlinkHref="/images/icons/sprite.svg#icon-sparcle" />
                  </svg>
                </div>
                <div className="text-lg font-normal leading-5">
                  Аштанга-йога
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" laptop pt-26">
          <div className="h-103 p-10 flex flex-row justify-between  bg-white shadow-2xl rounded-lg">
            <div className="flex flex-col gap-7">
              <p className="text-6xl font-medium leading-15">
                Начните путь <br />к новому телу
              </p>
              <img
                className=""
                src="/images/text_advert.png"
                alt="course_advert"
                width="437px"
                height="178px"
              />
              <button className="h-15 bg-custom-green hover:bg-custom-green-hover text-black font-bold py-2 px-4 rounded-full">
                Войдите, чтобы добавить курс
              </button>
            </div>
            <div id="fotos">
              <div id="foto1">
                <img
                  className="rotation-1 position4"
                  src="/images/Vector_Green.png"
                  alt="course_advert"
                  width="670.18px"
                  height="390.98px"
                />
              </div>
              <div id="foto2" className="">
                <img
                  className="rotation position1 "
                  src="/images/crouching_man.png"
                  alt="course_advert"
                  width="487px"
                  height="542.49px"
                />
              </div>
              <div id="foto3">
                <img
                  className="rotation-2 position2"
                  src="/images/Vector Black.png"
                  alt="course_advert"
                  width="50px"
                  height="42.5px"
                />
              </div>
            </div>
          </div>
        </div>

        <div
          id="new_way"
          className="mobile center h-100 p-8-2 flex flex-row justify-between  bg-white shadow-2xl rounded-lg"
        >
          <div className="flex flex-col gap-7">
            <p className="text-3-1xl lg:text-6xl font-medium leading-8-9 lg:leading-15">
              Начните путь <br />к новому телу
            </p>
            <img
              className=""
              src="/images/text_advert.png"
              alt="course_advert"
              // width="437px"
              // height="178px"
            />
            <button className="h-15 bg-custom-green hover:bg-custom-green-hover text-black text-base font-normal leading-4-1 rounded-full">
              Войдите, чтобы добавить курс
            </button>
          </div>
        </div>

        <div id="fotos" className="mobile">
          <img
            className=""
            src="/images/crouching_man_vectors.png"
            alt="course_advert"
          />
        </div>
      </div>
    </div>
  );
}
