require 'benchmark'
H = { 'UUC' => 'F', 'UUU' => 'F',
      # Leucine
      'UUA' => 'L', 'UUG' => 'L', 'CUU' => 'L',
      'CUC' => 'L', 'CUA' => 'L', 'CUG' => 'L',
      # Isoleucine
      'AUU' => 'I', 'AUC' => 'I', 'AUA' => 'I',
      # Methionine
      'AUG' => 'M',
      # Valine
      'GUU' => 'V', 'GUC' => 'V', 'GUA' => 'V', 'GUG' => 'V',
      # Serine
      'UCU' => 'S', 'UCC' => 'S', 'UCA' => 'S', 'UCG' => 'S',
      'AGU' => 'S', 'AGC' => 'S',
      # Proline
      'CCU' => 'P', 'CCC' => 'P', 'CCA' => 'P', 'CCG' => 'P',
      # Threonine
      'ACU' => 'T', 'ACC' => 'T', 'ACA' => 'T', 'ACG' => 'T',
      # Alanine
      'GCU' => 'A', 'GCC' => 'A', 'GCA' => 'A', 'GCG' => 'A',
      # Tyrosine
      'UAU' => 'Y', 'UAC' => 'Y',
      # Histidine
      'CAU' => 'H', 'CAC' => 'H',
      # Glutamine
      'CAA' => 'Q', 'CAG' => 'Q',
      # Asparagine
      'AAU' => 'N', 'AAC' => 'N',
      # Lysine
      'AAA' => 'K', 'AAG' => 'K',
      # Aspartic Acid
      'GAU' => 'D', 'GAC' => 'D',
      # Glutamic Acid
      'GAA' => 'E', 'GAG' => 'E',
      # Cystine
      'UGU' => 'C', 'UGC' => 'C',
      # Tryptophan
      'UGG' => 'W',
      # Arginine
      'CGU' => 'R', 'CGC' => 'R', 'CGA' => 'R', 'CGG' => 'R',
      'AGA' => 'R', 'AGG' => 'R',
      # Glycine
      'GGU' => 'G', 'GGC' => 'G', 'GGA' => 'G', 'GGG' => 'G',
      # Stop codon
      'UAA' => 'Stop', 'UGA' => 'Stop', 'UAG' => 'Stop'
    }.freeze

# function which translates the RNA into its protein sequence.
def protein(str = '')
  # to handle errorneous data
  flag = nil
  str.scan(/[A-Z]{3}/).map{ |s| H[s] == 'Stop' ? (flag = false;nil) : H[s] if flag.nil? }.compact.join
end

puts protein('UGCGAUGAAUAAGCUCGCUCC')
puts protein('UGC GAU GAA UAA GCU CGC UCC') # ->  CDE
# With multiple spaces
puts protein('UGC GAU  UAA GAA UAA GCU CGC UCC') # ->  CD
# With first sequence as 'Stop'
puts protein('UGACCAACAGCA') # ->
# With RNA Sequence of not length as multiple of 3
puts protein('UGC GAU GAA GCU CGC UCC GC') # ->  CDEARS
# With digits
puts protein('UGC GAU GAA GCU CGC777 UCC') # -> CDEARS
# With non-matching key in dictionary
puts protein('AAB') # ->
# Empty RNA String
puts protein # ->
