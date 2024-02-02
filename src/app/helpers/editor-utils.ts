interface Block {
  type: string;
  data: Record<string, any>;
}

export function convertEditorContentToHTML(data: any): string {
  let htmlString = '';

  if (data && data.blocks && Array.isArray(data.blocks)) {
    data.blocks.forEach((block: Block) => {
      htmlString += convertBlockToHTML(block);
    });
  }

  return htmlString;
}

function convertBlockToHTML(block: Block): string {
  switch (block.type) {
    case 'paragraph':
      return `<p>${block.data.text}</p>`;
    case 'header':
      return `<h${block.data.level}>${block.data.text}</h${block.data.level}>`;
    case 'table':
      return convertTableToHTML(block.data.content);
    case 'list':
      return convertListToHTML(block.data);
    case 'marker':
      return `<mark>${block.data.text}</mark>`;
    case 'delimiter':
      return '<hr>';
    case 'code':
      return `<code>${block.data.code}</code>`;
    case 'raw':
      return block.data.html;
    case 'quote':
      return `<blockquote>${block.data.text}<footer>${block.data.caption}</footer></blockquote>`;
    case 'warning':
      return `<div class="warning"><strong>${block.data.title}</strong><p>${block.data.message}</p></div>`;
    default:
      return '';
  }
}

function convertTableToHTML(content: any[]): string {
  let htmlString = '<table>';
  content.forEach((row) => {
    htmlString += '<tr>';
    row.forEach((cell) => {
      htmlString += `<td>${cell}</td>`;
    });
    htmlString += '</tr>';
  });
  htmlString += '</table>';
  return htmlString;
}

function convertListToHTML(data: Record<string, any>): string {
  const listTag = data.style === 'unordered' ? 'ul' : 'ol';
  let htmlString = `<${listTag}>`;
  data.items.forEach((item) => {
    htmlString += `<li>${item}</li>`;
  });
  htmlString += `</${listTag}>`;
  return htmlString;
}
