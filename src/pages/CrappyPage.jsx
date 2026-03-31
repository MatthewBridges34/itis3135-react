import PageTitle from "../components/PageTitle";

export default function CrappyPage() {
  return (
    <>
      <PageTitle title="Crappy Page" />
      <h2>Crappy Page</h2>
      <p>
        Your original link points to a deliberately poor-quality page in the <code>stuff</code> folder.
        For the React version, keep the navigation entry but use this placeholder route unless your instructor
        specifically asks you to reproduce that exact broken page inside React.
      </p>
    </>
  );
}
