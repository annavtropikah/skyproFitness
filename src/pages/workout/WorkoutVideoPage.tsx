import { useEffect, useState } from "react";
import { WorkoutType } from "../../types";
import {
  fetchUpdateExercisesProgress,
  getCourseById,
  getWorkoutById,
} from "../../api/api";
import { useAppSelector } from "../../hooks/redux-hooks";
import { useParams } from "react-router-dom";
import ModalSuccess from "../../components/WorkoutVideoBranch/ModalSuccess.tsx";
import ModalProgress, {
  Inputs,
} from "../../components/WorkoutVideoBranch/ModalProgress.tsx";
import ProgressBar from "../../components/ProgressBar/ProgressBar.tsx";

export function WorkoutVideoPage() {
  const [modalMyProgress, setModalMyProgress] = useState(false);
  const [progressIsSave, setProgressIsSave] = useState(false);
  const [courseName, setcourseName] = useState("");

  const [workout, setWorkout] = useState<WorkoutType | null>(null);
  const { workoutId, courseId } = useParams<{
    workoutId: string;
    courseId: string;
  }>();


  const user = useAppSelector((state) => state.user);

  useEffect(() => {
    if (workoutId && courseId) {
      getWorkoutById(workoutId, user.id, courseId).then((data) => {
        setWorkout(data);
      });
    }
  }, []);

  useEffect(() => {
    if (courseId) {
      getCourseById(courseId).then((data) => {
        console.log("!!!!!!", data);
        if (data?.nameRU) {
          setcourseName(data?.nameRU);
        }
      });
    }
  }, []);

  const handleSetModalMyProgress = () => {
    setModalMyProgress((prev) => !prev);
  };

  const handleSetProgressIsSave = async (data: Inputs) => {
    let newData: Record<string, unknown> = {};
    const keys = Object.keys(data).map((key) => {
      return { key, value: Number(data[key]) };
    });
    keys.forEach((obj) => {
      newData[obj.key] = obj.value;
    });
    await fetchUpdateExercisesProgress(
      user.id,
      courseId as string,
      workoutId as string,
      data
    );
    console.log(newData);
    handleHideModals();
  };

  const handleHideModals = () => {
    setModalMyProgress(false);
    setProgressIsSave((prev) => !prev);
  };

  return (
    <>
      <div className="flex justify-center h-screen">
        <div className="w-full max-w-screen-xl mx-4">
          <section className="mb-10 mt-5">
            <div>
              {/* workoutHeader */}
              <h1 className="text-6xl mb-6 font-medium">{courseName}</h1>
              <div>
                <span className="text-3xl font-normal">{workout?.name}</span>
              </div>
            </div>
          </section>
          <video
            src={workout?.video}
            controls
            className="h-h639px rounded-3xl mb-10"
          ></video>

          <div className="bg-white w-full px-10 py-10 rounded-3xl shadow-xl">
            <section>
              {/* ProgressBars */}
              <h3 className="text-3xl font-normal mb-8">
                Упражнения тренировки
              </h3>

              <div className="grid  grid-flow-col grid-rows-3 gap-x-10 mb-8 justify-start">
                {workout?.exercises ? (
                  workout?.exercises?.map((el) => (
                    <div className="mb-4 ">
                      <div className="flex gap-2 ">
                        <div className="mb-2.5">{el.name}</div>

                        <div className="mb-2.5">{el.progress}%</div>
                      </div>

                      <ProgressBar
                        percentage={(100 * el.progress) / el.quantity}
                      />

                    </div>
                  ))
                ) : (
                  <span>Упражнений нет</span>
                )}
              </div>

              <button
                onClick={handleSetModalMyProgress}
                className="bg-lime-400 w-80 py-4 font-normal rounded-full"
              >
                Заполнить свой прогресс
              </button>
            </section>
          </div>

          <ModalProgress

            exercises={workout?.exercises}

            modalMyProgress={modalMyProgress}
            handleSetModalMyProgress={handleSetModalMyProgress}
            handleSetProgressIsSave={handleSetProgressIsSave}
          />

          <ModalSuccess
            progressIsSave={progressIsSave}

            handleHideModals={handleHideModals}

          />
        </div>
      </div>
    </>
  );
}
