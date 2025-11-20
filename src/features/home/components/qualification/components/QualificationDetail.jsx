export default function QualificationDetail({ qualification }) {
    return (
        <>
            <div>{ qualification.ymd}</div>
            <div>{ qualification.title}</div>
        </>
    );
}