import { Route, Routes } from "react-router-dom";

import MainPage from "./pages/main/MainPage";
import { WorkoutVideoPage } from "./pages/workout/WorkoutVideoPage";
import { appRoutes } from "./route/appRoutes";
import ProtectedRoute from "./route/protectedRoute";
import ChosenCoursePage from "./pages/courses/ChosenCoursePage";
import { CourseType } from "./types";

export default function App() {
  return (
    <Routes>
      <Route element={<ProtectedRoute />}>
        {/* <Route path={appRoutes.USER_PAGE} element={<UserPage />}></Route> */}
        <Route
          path={appRoutes.WORKOUT_VIDEO_PAGE}
          element={<WorkoutVideoPage />}
        ></Route>
      </Route>
      <Route
        path={appRoutes.COURSE_PAGE}
        element={<ChosenCoursePage />}
      ></Route>
      <Route path={appRoutes.MAIN} element={<MainPage />}></Route>
    </Routes>
  );
}
