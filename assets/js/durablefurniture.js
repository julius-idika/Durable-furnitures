function generateWorldDocument(event){
event.preventDefault()
let doc = new Document().

doc.Styles.createParagraphStyle("customHeading1","Custom Heading1")
    .basedOn("Heading 1")
    .next("Normal")
    .quickFormat()

    .font(doc.theme.font.header.family)
    .size(32)
    .bold()

    .color(doc.theme.headings.one.color)
    .spacing({after:250})

    doc.Styles.createParagraphStyle("customHeading2","customHeading2")
    .basedOn("Heading 2")
    .next("Normal")
    .quickFormat()

    .font(doc.theme.font.header.family)
    .size(26)
    .bold()

    .color(doc.theme.headings.two.color)
    .spacing({after:150})

    doc.Styles.createParagraphStyle("customTitle","custom Title")
    .basedOn("Title")
    .next("Normal")
    .quickFormat()

    .font(doc.theme.font.header.family)
    .size(56)
    .bold()

    .color(doc.theme.headings.two.color)
    .spacing({after:250})

    doc.Styles.createParagraphStyle("customSubtitle","custom Subtittle")
    .basedOn("Subtitle")
    .next("Normal")
    .quickFormat()

    .font(doc.theme.font.header.family)
    .size(22)
    .bold()

    .color(doc.theme.headings.two.color)
    .spacing({after:150})

    doc.Styles.createParagraphStyle("customNormal","custom Normal")
    .basedOn("Subtitle")
    .next("Normal")
    .quickFormat()

    .font(doc.theme.font.header.family)
    .size(20)
    .bold()

    .color(doc.theme.headings.two.color)
    .spacing({after:150})

    saveDocumentToFile(doc,"NewDocument.docx")






}



















