import ReactMarkdown from "react-markdown";

export default function Markdown({ children }) {
    return (
        <ReactMarkdown
            components={{
                h1: ({node, ...props}) => (
                    <h1 className="text-xl font-bold my-4 border-b-2 pb-1" {...props} />
                ),
                h2: ({node, ...props}) => (
                    <h2 className="text-lg font-bold my-2" {...props} />
                ),
                h3: ({node, ...props}) => (
                    <h3 className="font-bold my-2" {...props}/>
                ),
                p: ({node, ...props}) => (
                    <p className="text-sm leading-7 my-2 px-2" {...props} />
                ),
                a: ({node, ...props}) => (
                    <a className="text-blue-400 underline" {...props} />
                ),
                ul: ({node, ...props}) => (
                    <ul className="px-2" {...props} />
                ),
                li: ({node, ...props}) => (
                    <li className="text-sm list-disc ml-5 my-1" {...props} />
                )
            }}
        >
            {children}
        </ReactMarkdown>
    );
}
