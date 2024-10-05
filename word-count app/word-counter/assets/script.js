const textArea = document.getElementById('textArea');
textArea.addEventListener('input', function() {
    let text = this.value;
    document.getElementById('char').innerHTML = text.length;
    let words = text.split(' ').filter(word => word.trim() !== '');
    document.getElementById('word').innerHTML = words.length;
    let sentences = text.split('.').filter(sentence => sentence.trim() !== '');
    document.getElementById('sentence').innerHTML = sentences.length;
    let paragraphs = text.split('\n').filter(paragraph => paragraph.trim() !== '');
    document.getElementById('paragraph').innerHTML = paragraphs.length;
});