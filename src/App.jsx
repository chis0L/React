import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import Homepages from "./pages/Homepages/Homepages";
import { NotPages } from "./pages/NotPages/NotPages";
import { QuestionPage } from "./pages/QuestionPage/QuestionPage";
import AddQuestionsLazy from "./components/AddQuestions/AddQuestions.lazy";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Homepages />} />
          <Route path="/addquestion" element={<AddQuestionsLazy />} />
          <Route path="/question/:id" element={<QuestionPage />} />
          <Route path="*" element={<NotPages />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
