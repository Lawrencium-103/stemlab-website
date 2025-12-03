export function LeadForm() {
    return (
        <section id="form-target" className="py-24 bg-brand-dark border-t border-slate-900">
            <div className="max-w-3xl mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="font-mono text-2xl font-bold text-white">Ready to Start?</h2>
                    <p className="text-slate-500">Get a custom quote or book a free consultation.</p>
                </div>
                <iframe
                    className="w-full h-[500px] bg-transparent rounded-xl"
                    src="https://airtable.com/embed/applxtlyMBLwM1qS7/pag9Qutg41KJNklg9/form"
                    frameBorder="0"
                    title="Lead Form"
                ></iframe>
            </div>
        </section>
    );
}
