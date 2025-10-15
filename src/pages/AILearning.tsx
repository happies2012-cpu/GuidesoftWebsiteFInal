import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Star, ExternalLink, Sparkles, DollarSign, Zap, CheckCircle2, XCircle, Info } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FollowerPointerCard } from '@/components/ui/following-pointer';
import { aiToolsAPI } from '@/lib/api';
import { toast } from 'sonner';
import { parseAIToolsCSV, AIToolData } from '@/lib/csvParser';

// Import CSV data
import aiToolsCSV from '@/assets/Ai_Tools_Data.csv?raw';

interface AITool {
  id: string;
  name: string;
  description: string;
  category: string;
  icon?: string;
  url?: string;
  tags: string;
  featured: boolean;
  pricing?: string;
  isPaid?: boolean;
  pros?: string;
  cons?: string;
  fullDescription?: string;
  detailUrl?: string;
  logoUrl?: string;
  applicableTasks?: string;
}

const AILearning = () => {
  const [tools, setTools] = useState<AITool[]>([]);
  const [csvTools, setCsvTools] = useState<AIToolData[]>([]);
  const [filteredTools, setFilteredTools] = useState<AITool[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [loading, setLoading] = useState(true);
  const [showFeatured, setShowFeatured] = useState(false);
  const [pricingFilter, setPricingFilter] = useState<'all' | 'free' | 'paid'>('all');

  useEffect(() => {
    fetchTools();
    fetchCategories();
    loadCSVData();
  }, []);

  useEffect(() => {
    filterTools();
  }, [searchQuery, selectedCategory, showFeatured, tools, csvTools, pricingFilter]);

  const loadCSVData = () => {
    try {
      const parsedTools = parseAIToolsCSV(aiToolsCSV);
      setCsvTools(parsedTools);
    } catch (error) {
      console.error('Failed to parse CSV data:', error);
      toast.error('Failed to load additional tool data');
    }
  };

  const fetchTools = async () => {
    try {
      const response = await aiToolsAPI.getAll();
      setTools(response.data);
      setFilteredTools(response.data);
    } catch (error) {
      toast.error('Failed to load AI tools');
    } finally {
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await aiToolsAPI.getCategories();
      setCategories(response.data);
    } catch (error) {
      console.error('Failed to load categories');
    }
  };

  const filterTools = () => {
    // Combine database tools with CSV tools
    const combinedTools: AITool[] = [
      ...tools,
      ...csvTools.map((csvTool, index) => ({
        id: `csv-${index}`,
        name: csvTool.companyName,
        description: csvTool.shortDescription,
        category: csvTool.category,
        icon: csvTool.logoUrl,
        url: csvTool.visitWebsiteUrl,
        tags: csvTool.applicableTasks,
        featured: false,
        pricing: csvTool.pricing,
        isPaid: csvTool.isPaid,
        pros: csvTool.pros,
        cons: csvTool.cons,
        fullDescription: csvTool.fullDescription,
        detailUrl: csvTool.detailUrl,
        logoUrl: csvTool.logoUrl,
        applicableTasks: csvTool.applicableTasks,
      }))
    ];

    let filtered = [...combinedTools];

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(
        (tool) =>
          tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          tool.tags.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory && selectedCategory !== 'all') {
      filtered = filtered.filter((tool) => tool.category === selectedCategory);
    }

    // Filter by featured
    if (showFeatured) {
      filtered = filtered.filter((tool) => tool.featured);
    }

    // Filter by pricing
    if (pricingFilter === 'free') {
      filtered = filtered.filter((tool) => !tool.isPaid || tool.pricing?.toLowerCase().includes('free'));
    } else if (pricingFilter === 'paid') {
      filtered = filtered.filter((tool) => tool.isPaid);
    }

    setFilteredTools(filtered);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 100
      }
    }
  };

  const renderToolsGrid = () => {
    if (loading) {
      return (
        <div className="text-center py-12">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary" />
          <p className="mt-4 text-muted-foreground">Loading AI tools...</p>
        </div>
      );
    }

    if (filteredTools.length === 0) {
      return (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No tools found matching your criteria</p>
          <Button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
              setShowFeatured(false);
              setPricingFilter('all');
            }}
            className="mt-4"
            variant="outline"
          >
            Clear Filters
          </Button>
        </div>
      );
    }

    return (
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filteredTools.map((tool) => (
          <motion.div key={tool.id} variants={itemVariants}>
            <FollowerPointerCard
              title={
                <div className="flex items-center gap-2">
                  {tool.icon && (
                    <img src={tool.icon} alt={tool.name} className="w-5 h-5 rounded" />
                  )}
                  <span>{tool.name}</span>
                </div>
              }
            >
              <Card className="h-full border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-2xl backdrop-blur-sm bg-background/95">
                <CardHeader>
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        {tool.icon && (
                          <img src={tool.icon} alt={tool.name} className="w-10 h-10 rounded-lg object-cover" />
                        )}
                        {tool.featured && <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />}
                      </div>
                      <CardTitle className="text-xl mb-2">{tool.name}</CardTitle>
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant={tool.isPaid ? 'default' : 'secondary'} className="text-xs">
                          {tool.isPaid ? (
                            <><DollarSign className="w-3 h-3 mr-1" />{tool.pricing || 'Paid'}</>
                          ) : (
                            <><Zap className="w-3 h-3 mr-1" />Free</>
                          )}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {tool.category}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <CardDescription className="line-clamp-3 text-sm">
                    {tool.fullDescription || tool.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {/* Pros and Cons */}
                  {(tool.pros || tool.cons) && (
                    <div className="space-y-3 mb-4">
                      {tool.pros && (
                        <div className="space-y-1">
                          <h4 className="text-xs font-semibold flex items-center gap-1 text-green-600 dark:text-green-400">
                            <CheckCircle2 className="w-3 h-3" />
                            Pros
                          </h4>
                          <p className="text-xs text-muted-foreground line-clamp-2">
                            {tool.pros.split(',').slice(0, 3).join(', ')}
                          </p>
                        </div>
                      )}
                      {tool.cons && (
                        <div className="space-y-1">
                          <h4 className="text-xs font-semibold flex items-center gap-1 text-red-600 dark:text-red-400">
                            <XCircle className="w-3 h-3" />
                            Cons
                          </h4>
                          <p className="text-xs text-muted-foreground line-clamp-2">
                            {tool.cons.split(',').slice(0, 3).join(', ')}
                          </p>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Tags */}
                  {tool.applicableTasks && (
                    <div className="flex flex-wrap gap-1 mb-4">
                      {tool.applicableTasks.split(',').slice(0, 3).map((task, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {task.trim()}
                        </Badge>
                      ))}
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    {tool.url && (
                      <Button
                        asChild
                        size="sm"
                        className="flex-1"
                      >
                        <a
                          href={tool.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <ExternalLink className="w-3 h-3" />
                          Visit Site
                        </a>
                      </Button>
                    )}
                    {tool.detailUrl && (
                      <Button
                        asChild
                        size="sm"
                        variant="outline"
                      >
                        <a
                          href={tool.detailUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <Info className="w-3 h-3" />
                          Details
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </FollowerPointerCard>
          </motion.div>
        ))}
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/5">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iaHNsKDIzOSA4NCUgNjclIC8gMC4xNSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvZz48L3N2Zz4=')] opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">1000+ AI Tools Directory</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
              AI Learning Tools
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Discover the most comprehensive collection of AI tools to supercharge your workflow
            </p>
          </motion.div>

          {/* Search and Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="max-w-4xl mx-auto mt-12"
          >
            <Card className="border-primary/20 shadow-xl backdrop-blur-lg bg-background/90">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                    <Input
                      placeholder="Search AI tools by name, description, or tags..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10 border-primary/20 focus:border-primary"
                    />
                  </div>
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger className="w-full md:w-64 border-primary/20">
                      <div className="flex items-center gap-2">
                        <Filter className="h-4 w-4" />
                        <SelectValue placeholder="All Categories" />
                      </div>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Button
                    variant={showFeatured ? 'default' : 'outline'}
                    onClick={() => setShowFeatured(!showFeatured)}
                    className="flex items-center gap-2"
                  >
                    <Star className="h-4 w-4" />
                    Featured
                  </Button>
                </div>
                <div className="mt-4 text-sm text-muted-foreground">
                  Showing {filteredTools.length} of {tools.length} tools
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-12 pb-24">
        <div className="container mx-auto px-4">
          {/* Pricing Filter Tabs */}
          <Tabs defaultValue="all" value={pricingFilter} onValueChange={(value) => setPricingFilter(value as 'all' | 'free' | 'paid')} className="mb-8">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3">
              <TabsTrigger value="all" className="flex items-center gap-2">
                <Sparkles className="h-4 w-4" />
                All Tools
              </TabsTrigger>
              <TabsTrigger value="free" className="flex items-center gap-2">
                <Zap className="h-4 w-4" />
                Free
              </TabsTrigger>
              <TabsTrigger value="paid" className="flex items-center gap-2">
                <DollarSign className="h-4 w-4" />
                Paid
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-8">
              {renderToolsGrid()}
            </TabsContent>
            <TabsContent value="free" className="mt-8">
              {renderToolsGrid()}
            </TabsContent>
            <TabsContent value="paid" className="mt-8">
              {renderToolsGrid()}
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default AILearning;
