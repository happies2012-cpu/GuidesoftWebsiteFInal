export interface AIToolData {
  detailUrl: string;
  logoUrl: string;
  companyName: string;
  shortDescription: string;
  primaryTask: string;
  applicableTasks: string;
  fullDescription: string;
  pros: string;
  cons: string;
  pricing: string;
  visitWebsiteUrl: string;
  isPaid: boolean;
  category: string;
}

export interface CourseCategory {
  id: string;
  name: string;
  icon: string;
  color: string;
  createdAt: string;
}

export function parseCSV(csvText: string): string[][] {
  const lines = csvText.split('\n');
  const result: string[][] = [];
  
  for (const line of lines) {
    if (!line.trim()) continue;
    
    const values: string[] = [];
    let current = '';
    let insideQuotes = false;
    
    for (let i = 0; i < line.length; i++) {
      const char = line[i];
      
      if (char === '"') {
        insideQuotes = !insideQuotes;
      } else if (char === ',' && !insideQuotes) {
        values.push(current.trim());
        current = '';
      } else {
        current += char;
      }
    }
    
    values.push(current.trim());
    result.push(values);
  }
  
  return result;
}

export function parseAIToolsCSV(csvText: string): AIToolData[] {
  const lines = parseCSV(csvText);
  const headers = lines[0];
  const tools: AIToolData[] = [];
  
  for (let i = 1; i < lines.length; i++) {
    const row = lines[i];
    if (row.length < 10) continue;
    
    const pricing = row[9] || 'Free';
    const isPaid = pricing.toLowerCase() !== 'free' && 
                   !pricing.toLowerCase().includes('free') &&
                   pricing.trim() !== '';
    
    // Extract category from applicable_tasks or primary_task
    const applicableTasks = row[5] || row[4] || 'General';
    const category = applicableTasks.split(',')[0].trim();
    
    tools.push({
      detailUrl: row[0] || '',
      logoUrl: row[1] || '',
      companyName: row[2] || '',
      shortDescription: row[3] || '',
      primaryTask: row[4] || '',
      applicableTasks: row[5] || '',
      fullDescription: row[6] || '',
      pros: row[7] || '',
      cons: row[8] || '',
      pricing: pricing,
      visitWebsiteUrl: row[10] || row[0] || '',
      isPaid,
      category: category.charAt(0).toUpperCase() + category.slice(1),
    });
  }
  
  return tools;
}

export function parseCourseCategoriesCSV(csvText: string): CourseCategory[] {
  const lines = parseCSV(csvText);
  const categories: CourseCategory[] = [];
  
  for (let i = 1; i < lines.length; i++) {
    const row = lines[i];
    if (row.length < 4) continue;
    
    categories.push({
      id: row[0] || '',
      name: row[1] || '',
      icon: row[2] || '',
      color: row[3] || '#4CAF50',
      createdAt: row[4] || new Date().toISOString(),
    });
  }
  
  return categories;
}
