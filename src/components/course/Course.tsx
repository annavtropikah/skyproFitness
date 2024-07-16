import calendarIcon from "/icons/icon-calendar.svg";
import timeIcon from "/icons/icon-time.svg";
import difficultyIcon from "/icons/level.png";
import plusIcon from "/icons/icon-plus.svg";
import addIcon from "/icons/add.svg";

import minusIcon from "/icons/icon-minus.svg";
import { CourseIDType, CourseType } from "../../types";
import fit from "/images/bgYellow.jpg";

import { useEffect, useState } from "react";
import { fetchAndProcessImage } from "../../api/api";
import Button from "../button/Button";
import { useAppSelector } from "../../hooks/redux-hooks";
import { Link } from "react-router-dom";
import { appRoutes } from "../../route/appRoutes";

export type CourseProps = {
  course: CourseType;
  onAddCourse?: (courseId: string) => void;
  addedCourses?: CourseIDType[],

  isProfile?: boolean;
};

export default function Course({
  course,
  onAddCourse,
  isProfile,
  addedCourses,
}: CourseProps) {

  const { nameRU, duration, timeaday, level, src, _id } = course;

  const [imageUrl, setImageUrl] = useState(fit);
  const [isAddedCourse, setIsAddedCourse] = useState<boolean>(false)
  const user = useAppSelector((state) => state.user);


  console.log(isAddedCourse);
  console.log(addedCourses);
  const isAdded = Boolean(addedCourses ? addedCourses?.find((el) => el.courseId === course._id) : [])

  useEffect(() => {
    if (user.id) {
      setIsAddedCourse(isAdded)
    }
  }, [user.id, addedCourses]);



  const handleAddCourse = () => {
    onAddCourse(_id);
    if(user.id){
      setIsAddedCourse(true)
    }
    //не уверена,что так будет работать,когда курсы будут удаляться на странице пользователя, нужен тест,когда страница пользователя будет готова
  };

  useEffect(() => {
    fetchAndProcessImage(src).then((data) => {
      setImageUrl(data);
    });
  }, []);

  return (
    <>
      <div className="relative shadow-lg max-w-[360px] mt-8 mb-2 flex flex-col self-start rounded-3xl bg-white sm:shrink-0 sm:grow sm:basis-0 box-border">
        <div className="mx-0 mt-0" onClick={handleAddCourse}>
            <img
              className="rounded-3xl"
              src={imageUrl}
              cross-origin="use-credentials"
            ></img>
          <div>
            {!isProfile ? (
              isAddedCourse ? (
                <img
                  className="absolute top-[20px] right-[20px] cursor-pointer"
                  src={addIcon}
                  alt="добавить курс"
                />
              ) : (
                <img
                  className="absolute top-[20px] right-[20px] cursor-pointer"
                  src={plusIcon}
                  alt="курс добавлен"
                />
              )
            ) : (
              <img
                className="absolute top-[20px] right-[20px] cursor-pointer"
                src={minusIcon}
                alt="курс добавлен"
              />
            )}
          </div>
        </div>
        <Link to={appRoutes.COURSE_PAGE}>
          <div className="p-6 mb-4 text-base grid md:gap-3 ">
            <h6 className="font-bold text-[32px] my-6 cursor-pointer">{nameRU}</h6>
            <div className="flex justify-start">
              <div className="flex justify-start rounded-3xl bg-gray px-3 py-3 mr-2">
                <img
                  className="w-[18px] h-[18px]"
                  src={calendarIcon}
                  alt="длительность курса"
                />
                <div className="pl-2">{duration}</div>
              </div>
              <div className="flex justify-start rounded-3xl bg-gray px-3 py-3 ">
                <img
                  className="w-[18px] h-[18px]"
                  src={timeIcon}
                  alt="длительность занятия"
                />
                <div className="pl-2">{timeaday}</div>
              </div>
            </div>
            <div className="flex justify-start rounded-3xl bg-gray px-3 py-3 mr-24 ">
              <img
                className="w-[18px] h-[18px]"
                src={difficultyIcon}
                alt="сложность"
              />
              <div className="pl-2 ">{level}</div>
            </div>

            {isProfile && (
              <>
                <div>
                  <p>Прогресс</p>
                  <div className="w-[300px] rounded-full h-[6px] bg-custom-progress-gray overflow-hidden">
                    <div
                      className={`h-full w-[30%] bg-custom-progress-blue`}
                    ></div>
                  </div>
                </div>
                <Button type="primary" classNames="m-auto w-[300px]">
                  Начать тренировку
                </Button>
              </>
            )}
          </div>
        </Link>
      </div>
    </>
  );
}
