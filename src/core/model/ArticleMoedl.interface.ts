export interface ArticleResponseModel {
  status: string;
  copyright: string;
  num_results: number;
  results: ArticleModel[];
}

export interface ArticleModel {
  uri: string;
  url: string;
  id: number;
  asset_id: number;
  source: string;
  published_date: string;
  updated: string;
  section: string;
  subsection: string;
  nytdsection: string;
  adx_keywords: string;
  column: any;
  byline: string;
  type: string;
  title: string;
  abstract: string;
  des_facet: string[];
  org_facet: string[];
  per_facet: string[];
  geo_facet: string[];
  media: MediaModel[];
  eta_id: number;
}

export interface MediaModel {
  type: string;
  subtype: string;
  caption: string;
  copyright: string;
  approved_for_syndication: number;
  "media-metadata": MetaDataModel[];
}

export interface MetaDataModel {
  url: string;
  format: string;
  height: number;
  width: number;
}
